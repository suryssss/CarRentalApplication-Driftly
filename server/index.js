import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as schema from '../schema.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize database
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool, { schema });

// Routes

// Get all cars
app.get('/api/cars', async (req, res) => {
  try {
    const cars = await db.query.cars.findMany();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get car by ID
app.get('/api/cars/:id', async (req, res) => {
  try {
    const car = await db.query.cars.findFirst({
      where: (cars, { eq }) => eq(cars.id, parseInt(req.params.id))
    });
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { userId, carId, startDate, endDate, totalAmount } = req.body;
    const booking = await db.insert(schema.bookings).values({
      userId,
      carId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalAmount,
      status: 'pending'
    }).returning();
    res.json(booking[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get booking by ID
app.get('/api/bookings/:id', async (req, res) => {
  try {
    const booking = await db.query.bookings.findFirst({
      where: (bookings, { eq }) => eq(bookings.id, parseInt(req.params.id)),
      with: {
        car: true,
        user: true
      }
    });
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user bookings
app.get('/api/users/:userId/bookings', async (req, res) => {
  try {
    const bookings = await db.query.bookings.findMany({
      where: (bookings, { eq }) => eq(bookings.userId, parseInt(req.params.userId)),
      with: {
        car: true
      }
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, bookingId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      metadata: {
        bookingId
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Stripe webhook
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const bookingId = paymentIntent.metadata.bookingId;

      // Update booking status
      await db.update(schema.bookings)
        .set({ status: 'confirmed' })
        .where(eq(schema.bookings.id, parseInt(bookingId)));

      // Create payment record
      await db.insert(schema.payments).values({
        bookingId: parseInt(bookingId),
        amount: paymentIntent.amount / 100,
        stripePaymentId: paymentIntent.id,
        status: 'succeeded'
      });
    }

    res.json({ received: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
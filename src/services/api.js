import { loadStripe } from '@stripe/stripe-js';

const API_URL = 'http://localhost:5000/api';
const stripePromise = loadStripe('your_stripe_publishable_key_here');

export const api = {
  // Car related APIs
  getCars: async () => {
    const response = await fetch(`${API_URL}/cars`);
    return response.json();
  },

  // Booking related APIs
  createBooking: async (bookingData) => {
    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    return response.json();
  },

  // Payment related APIs
  initiatePayment: async (amount, bookingId) => {
    try {
      // Create payment intent
      const response = await fetch(`${API_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, bookingId }),
      });
      const { clientSecret } = await response.json();

      // Load Stripe
      const stripe = await stripePromise;

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement('card'),
          billing_details: {
            name: 'Customer Name',
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      return result.paymentIntent;
    } catch (error) {
      throw error;
    }
  },
}; 
import { pgTable, serial, varchar, timestamp, numeric, boolean, text, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const cars = pgTable('cars', {
  id: serial('id').primaryKey(),
  model: varchar('model', { length: 255 }).notNull(),
  brand: varchar('brand', { length: 255 }).notNull(),
  year: integer('year').notNull(),
  price: numeric('price').notNull(),
  image: varchar('image', { length: 255 }),
  available: boolean('available').default(true),
  description: text('description'),
  category: varchar('category', { length: 50 }),
  features: text('features'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  carId: integer('car_id').references(() => cars.id),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  totalAmount: numeric('total_amount').notNull(),
  status: varchar('status', { length: 50 }).default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  bookingId: integer('booking_id').references(() => bookings.id),
  amount: numeric('amount').notNull(),
  stripePaymentId: varchar('stripe_payment_id', { length: 255 }),
  status: varchar('status', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
}); 
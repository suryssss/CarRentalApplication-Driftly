import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as schema from '../schema.js';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool, { schema });

const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 50,
    image: 'https://example.com/camry.jpg',
    available: true,
    description: 'Comfortable and reliable sedan',
    category: 'Sedan',
    features: 'Automatic transmission, Bluetooth, Backup camera',
  },
  {
    brand: 'Honda',
    model: 'CR-V',
    year: 2023,
    price: 65,
    image: 'https://example.com/crv.jpg',
    available: true,
    description: 'Spacious and versatile SUV',
    category: 'SUV',
    features: 'All-wheel drive, Apple CarPlay, Android Auto',
  },
  {
    brand: 'BMW',
    model: 'M3',
    year: 2023,
    price: 150,
    image: 'https://example.com/m3.jpg',
    available: true,
    description: 'High-performance luxury sedan',
    category: 'Sports',
    features: 'Twin-turbo engine, Sport suspension, Premium audio',
  },
  // Add more cars as needed
];

async function seed() {
  try {
    console.log('Seeding database...');
    
    // Insert cars
    await db.insert(schema.cars).values(cars);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed(); 
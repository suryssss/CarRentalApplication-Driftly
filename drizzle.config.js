/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_RUwc1I5zfaLB@ep-raspy-thunder-a514g0c9-pooler.us-east-2.aws.neon.tech/car-rental?sslmode=require',
  },
  out: "./drizzle", // Optional: recommended output directory for generated migrations
}

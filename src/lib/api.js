import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const carService = {
  getAllCars: async () => {
    const response = await api.get('/cars');
    return response.data;
  },

  getCarById: async (id) => {
    const response = await api.get(`/cars/${id}`);
    return response.data;
  },
};

export const bookingService = {
  createBooking: async (bookingData) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  getBookingById: async (id) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  getUserBookings: async (userId) => {
    const response = await api.get(`/users/${userId}/bookings`);
    return response.data;
  },
};

export const paymentService = {
  createPaymentIntent: async (amount, bookingId) => {
    const response = await api.post('/create-payment-intent', {
      amount,
      bookingId,
    });
    return response.data;
  },
}; 
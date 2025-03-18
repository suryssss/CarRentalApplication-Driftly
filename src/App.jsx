import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import HomePage from './Home';
import SearchCars from './components/SearchCars';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <Elements stripe={stripePromise}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<SearchCars />} />
            <Route path="/booking/:carId" element={<Booking />} />
            <Route path="/payment/:bookingId" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Elements>
    </ClerkProvider>
  );
}

export default App;

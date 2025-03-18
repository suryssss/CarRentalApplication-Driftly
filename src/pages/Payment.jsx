import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

function Payment() {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [booking, setBooking] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooking();
  }, [bookingId]);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/${bookingId}`);
      setBooking(response.data);
    } catch (error) {
      console.error('Error fetching booking:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !booking) return;

    setProcessing(true);
    try {
      // Create payment intent
      const { data: { clientSecret } } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-payment-intent`,
        {
          amount: booking.totalAmount,
          bookingId
        }
      );

      // Confirm payment
      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (stripeError) {
        setError(stripeError.message);
      } else {
        navigate('/dashboard', { state: { success: true } });
      }
    } catch (error) {
      setError('Payment failed. Please try again.');
    }
    setProcessing(false);
  };

  if (!booking) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Complete Payment</h1>
      <div className="mb-6">
        <h2 className="text-xl mb-2">Booking Summary</h2>
        <p>Total Amount: ${booking.totalAmount}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-4 border rounded">
          <CardElement />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
}

export default Payment; 
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

function Booking() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const { user, isSignedIn } = useUser();
  const [car, setCar] = useState(null);
  const [dates, setDates] = useState({
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/sign-in');
      return;
    }
    fetchCar();
  }, [carId, isSignedIn]);

  const fetchCar = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/cars/${carId}`);
      setCar(response.data);
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, {
        carId,
        userId: user.id,
        startDate: dates.startDate,
        endDate: dates.endDate,
        totalAmount: calculateTotal()
      });
      navigate(`/payment/${response.data.id}`);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const calculateTotal = () => {
    if (!car || !dates.startDate || !dates.endDate) return 0;
    const days = Math.ceil(
      (new Date(dates.endDate) - new Date(dates.startDate)) / (1000 * 60 * 60 * 24)
    );
    return car.price * days;
  };

  if (!car) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Book {car.brand} {car.model}</h1>
      <form onSubmit={handleBooking} className="space-y-6">
        <div>
          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            value={dates.startDate}
            onChange={(e) => setDates({ ...dates, startDate: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">End Date</label>
          <input
            type="date"
            value={dates.endDate}
            onChange={(e) => setDates({ ...dates, endDate: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="text-xl font-bold">
          Total: ${calculateTotal()}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}

export default Booking; 
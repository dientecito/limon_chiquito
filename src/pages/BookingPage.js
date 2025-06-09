import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import ReservationsList from '../components/ReservationsList'; // importa el componente de reservas
import { fetchAPI, submitAPI } from '../api';

const formatDate = (date) => {
  return date instanceof Date
    ? date.toISOString().split('T')[0]
    : date;
};

const initializeTimes = () => {
  const today = formatDate(new Date());
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (action.type === 'date_change') {
    const formattedDate = formatDate(action.date);
    return fetchAPI(formattedDate);
  }
  return state;
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const navigate = useNavigate();

  const saveReservationLocally = (newReservation) => {
    const existingReservations = JSON.parse(localStorage.getItem('reservas')) || [];
    existingReservations.push(newReservation);
    localStorage.setItem('reservas', JSON.stringify(existingReservations));
  };

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      saveReservationLocally(formData);
      navigate('/confirmacion');
    } else {
      alert('Error al realizar la reserva. Inténtalo de nuevo.');
    }
  };

  return (
    <main className="p-4" style={{ display: 'flex', gap: '40px' }}>
      <section style={{ flex: 1, maxWidth: '400px' }}>
        <h1>Reserva tu mesa</h1>
        <p>Por favor, rellena el siguiente formulario para hacer una reserva.</p>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={submitForm}
        />
      </section>

      <section style={{ flex: 1, maxWidth: '400px' }}>
        <ReservationsList />
      </section>
    </main>
  );
}

export default BookingPage;

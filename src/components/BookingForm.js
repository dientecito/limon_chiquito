import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    onSubmit(formData);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'date_change', date: selectedDate });
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <label htmlFor="res-date">Elige una fecha</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Elige una hora</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        disabled={availableTimes.length === 0}
      >
        <option value="">--Selecciona una hora--</option>
        {availableTimes.map((t, i) => (
          <option key={i} value={t}>{t}</option>
        ))}
      </select>

      {availableTimes.length === 0 && (
        <p style={{ color: 'red' }}>No hay horarios disponibles para esta fecha.</p>
      )}

      <label htmlFor="guests">Número de invitados</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Ocasión</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">--Selecciona una ocasión--</option>
        <option value="cumpleaños">Cumpleaños</option>
        <option value="aniversario">Aniversario</option>
      </select>

      <button type="submit" disabled={availableTimes.length === 0}>Reservar mesa</button>
    </form>
  );
}

export default BookingForm;

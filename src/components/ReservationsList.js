import React, { useEffect, useState } from 'react';

function ReservationsList() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(storedReservations);
  }, []);

  if (reservas.length === 0) {
    return <p>No hay reservas realizadas aún.</p>;
  }

  return (
    <div>
      <h2>Reservas realizadas</h2>
      <ul>
        {reservas.map((reserva, index) => (
          <li key={index}>
            Fecha: {reserva.date}, Hora: {reserva.time}, Invitados: {reserva.guests}, Ocasión: {reserva.occasion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationsList;


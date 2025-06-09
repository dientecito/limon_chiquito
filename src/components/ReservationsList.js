import React, { useEffect, useState } from 'react';

function ReservationsList() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(storedReservations);
  }, []);

  const handleDelete = (indexToDelete) => {
    const nuevasReservas = reservas.filter((_, i) => i !== indexToDelete);
    localStorage.setItem('reservas', JSON.stringify(nuevasReservas));
    setReservas(nuevasReservas);
  };

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
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '10px', color: 'white', backgroundColor: 'red', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationsList;



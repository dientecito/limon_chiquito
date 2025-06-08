import React from 'react';

function BookingPage() {
  return (
    <div className="section">
      <h2>Book a Table</h2>
      <form>
        <label>Date:
          <input type="date" name="date" />
        </label>
        <label>Time:
          <input type="time" name="time" />
        </label>
        <label>Guests:
          <input type="number" name="guests" min="1" max="10" />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default BookingPage;

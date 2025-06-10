// BookingForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// src/BookingForm.test.js
import BookingForm from './components/BookingForm'; // O './components/BookingForm.js' si es necesario

// Mock para dispatch y onSubmit, ya que son props que el componente espera
const mockDispatch = jest.fn();
const mockOnSubmit = jest.fn();

describe('BookingForm', () => {
  // Configuración común para cada prueba
  beforeEach(() => {
    mockDispatch.mockClear();
    mockOnSubmit.mockClear();
  });

  // ---
  // ## Pruebas de Validación HTML5
  // ---

  test('El campo de fecha (res-date) tiene los atributos HTML5 correctos', () => {
    const today = new Date().toISOString().split('T')[0];
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const dateInput = screen.getByLabelText(/Elige una fecha/i);

    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', today);
  });

  test('El campo de hora (res-time) tiene el atributo HTML5 "required"', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const timeSelect = screen.getByLabelText(/Elige una hora/i);

    expect(timeSelect).toBeRequired();
    expect(timeSelect).not.toBeDisabled(); // Inicialmente no debería estar deshabilitado si hay horas disponibles
  });

  test('El campo de hora (res-time) está deshabilitado si no hay horarios disponibles', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const timeSelect = screen.getByLabelText(/Elige una hora/i);

    expect(timeSelect).toBeDisabled();
    expect(screen.getByText(/No hay horarios disponibles para esta fecha./i)).toBeInTheDocument();
  });

  test('El campo de número de invitados (guests) tiene los atributos HTML5 correctos', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const guestsInput = screen.getByLabelText(/Número de invitados/i);

    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '2');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveValue(2); // Valor inicial
  });

  test('El campo de ocasión (occasion) tiene el atributo HTML5 "required"', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const occasionSelect = screen.getByLabelText(/Ocasión/i);

    expect(occasionSelect).toBeRequired();
  });

  // ---
  // ## Pruebas de Interacción y Envío de Formulario
  // ---

  test('La llamada a dispatch se activa al cambiar la fecha', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const dateInput = screen.getByLabelText(/Elige una fecha/i);

    const newDate = '2025-12-25';
    fireEvent.change(dateInput, { target: { value: newDate } });

    expect(dateInput).toHaveValue(newDate);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'date_change', date: newDate });
  });

  test('El formulario se envía con los datos correctos cuando es válido', () => {
    const availableTimes = ['17:00', '18:00'];
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);

    // Rellenar el formulario
    const dateInput = screen.getByLabelText(/Elige una fecha/i);
    const timeSelect = screen.getByLabelText(/Elige una hora/i);
    const guestsInput = screen.getByLabelText(/Número de invitados/i);
    const occasionSelect = screen.getByLabelText(/Ocasión/i);
    const submitButton = screen.getByRole('button', { name: /Reservar mesa/i });

    const testDate = '2025-12-31';
    const testTime = '18:00';
    const testGuests = 5;
    const testOccasion = 'aniversario';

    fireEvent.change(dateInput, { target: { value: testDate } });
    fireEvent.change(timeSelect, { target: { value: testTime } });
    fireEvent.change(guestsInput, { target: { value: testGuests } });
    fireEvent.change(occasionSelect, { target: { value: testOccasion } });

    // Enviar el formulario
    fireEvent.click(submitButton);

    // Verificar que onSubmit fue llamado con los datos correctos
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      date: testDate,
      time: testTime,
      guests: testGuests,
      occasion: testOccasion,
    });
  });

  test('El botón de enviar está deshabilitado si no hay horarios disponibles', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const submitButton = screen.getByRole('button', { name: /Reservar mesa/i });

    expect(submitButton).toBeDisabled();
  });

  test('El botón de enviar está habilitado si hay horarios disponibles', () => {
    render(<BookingForm availableTimes={['19:00']} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);
    const submitButton = screen.getByRole('button', { name: /Reservar mesa/i });

    expect(submitButton).not.toBeDisabled();
  });

  test('El campo de hora se resetea al cambiar la fecha', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={mockDispatch} onSubmit={mockOnSubmit} />);

    const timeSelect = screen.getByLabelText(/Elige una hora/i);
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    expect(timeSelect).toHaveValue('17:00');

    const dateInput = screen.getByLabelText(/Elige una fecha/i);
    fireEvent.change(dateInput, { target: { value: '2025-12-25' } });

    expect(timeSelect).toHaveValue('');
  });
});
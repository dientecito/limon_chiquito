import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm submit button with text "Reservar mesa"', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const buttonElement = screen.getByText("Reservar mesa");
    expect(buttonElement).toBeInTheDocument();
});
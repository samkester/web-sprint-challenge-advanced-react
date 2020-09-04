import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    //lots of act
    fireEvent.change(screen.getByLabelText(/first name/i), {target: {value: "George" }});
    fireEvent.change(screen.getByLabelText(/last name/i), {target: {value: "Jetson" }});
    fireEvent.change(screen.getByLabelText(/address/i), {target: {value: "1928 Glenn Ave." }});
    fireEvent.change(screen.getByLabelText(/city/i), {target: {value: "New New York" }});
    fireEvent.change(screen.getByLabelText(/state/i), {target: {value: "BAMA" }});
    fireEvent.change(screen.getByLabelText(/zip/i), {target: {value: "101101" }});

    fireEvent.click(screen.getAllByText(/checkout/i)[1]);

    //and now assert
    expect(screen.getByText(/You have ordered/i)).toBeInTheDocument();
});

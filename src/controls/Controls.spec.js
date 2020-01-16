import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../dashboard/Dashboard";

// Test away!

test('Buttons work', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/lock gate/i);
    fireEvent.click(getByText(/close gate/i));
    expect(getByText(/lock gate/i).disabled).toBe(false);
    fireEvent.click(getByText(/lock gate/i));
    getByText(/unlock gate/i);
    expect(getByText(/open gate/i).disabled).toBe(true);
});
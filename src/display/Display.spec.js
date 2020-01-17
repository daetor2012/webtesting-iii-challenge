import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Display from "./Display";

// Test away!
test('Component is open and unlocked', () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const openType = getByText(/open/i);
    const unlockedType = getByText(/unlocked/i);
    expect(openType.classList.contains('green-led')).toBe(true);
    expect(unlockedType.classList.contains('green-led')).toBe(true);
})

test('Component is closed and unlocked', () => {
    const { getByText } = render(<Display locked={false} closed={true} />);
    const closedType = getByText(/closed/i);
    const unlockedType = getByText(/unlocked/i);
    expect(closedType.classList.contains('red-led')).toBe(true);
    expect(unlockedType.classList.contains('green-led')).toBe(true);
})

test('Component is closed and locked', () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const closedType = getByText(/closed/i);
    const lockedType = getByText(/locked/i);
    expect(closedType.classList.contains('red-led')).toBe(true);
    expect(lockedType.classList.contains('red-led')).toBe(true);
})
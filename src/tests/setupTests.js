// import "@testing-library/jest-dom";
// import App from "../App.jsx";

// describe("Register component", () => {
//   it("should render Register component correctly", () => {
//     render(<App />);
//     const element = screen.getByRole("heading");
//     expect(element).toBeInTheDocument();
//   });
// });

import { expect, afterEach, test } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";
import '@testing-library/jest-dom';

expect.extend(matchers);
afterEach(() => {
  cleanup();
});

// test('добавляет новую запись в массив', () => {
//   const start = [{ id: 1, text: 'старая' }];
//   const fresh = { id: 2, text: 'новая' };

//   const result = addEntry(start, fresh);

//   expect(result).toHaveLength(2);
//   expect(result[1]).toEqual(fresh);
//   expect(result).not.toBe(start); 
// });
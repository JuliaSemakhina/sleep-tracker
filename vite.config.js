import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/sleep-tracker",
    test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.js',
    testMatch: ['scr/**/*.test.jsx'],
    globals: true
   }
});


// import { afterEach } from 'vitest';
// import { cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/vitest';

// afterEach(() => {
//   cleanup();
// });
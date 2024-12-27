/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // Import the daisyui plugin

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use the imported plugin
  ],
};

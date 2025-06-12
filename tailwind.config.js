/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8c48b",
        warmOrange: "#f6a96b",
        secondary: "#b1d7c6",
        softGreen: "#a5d9b9",
      },
    },
  },
  plugins: [],
}
// This is the Tailwind CSS configuration file for the NGO platform.
// It defines custom colors and specifies the content files to scan for class names.
// The primary color is a warm orange, with a secondary soft green for accents.
// The configuration extends the default Tailwind theme to include these custom colors.
// This allows for a consistent and visually appealing design across the platform.
// The file is structured to be easily readable and maintainable, following best practices for Tailwind CSS configurations.
// The content array includes all JavaScript and TypeScript files in the src directory,
// ensuring that Tailwind can purge unused styles effectively during production builds.
// The theme extension adds custom colors that align with the NGO's branding,
// enhancing the user interface with a warm and inviting color palette.
// The plugins array is currently empty, but can be extended in the future to include additional Tailwind CSS plugins as needed.
// This configuration is essential for setting up the visual style of the NGO platform,
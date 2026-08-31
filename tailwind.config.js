/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#f4f9e9",
          100: "#e6f2cd",
          200: "#cfe49f",
          300: "#b3d570",
          400: "#a5cf4f",
          500: "#96ca36",
          600: "#7ba82c",
          700: "#5f8722",
          800: "#476519",
          900: "#324711",
        },
        ink: {
          50: "#f5f5f6",
          100: "#e3e2e5",
          200: "#c3c1c8",
          300: "#9d99a6",
          400: "#726d7d",
          500: "#524d5c",
          600: "#3b383f",
          700: "#302d34",
          800: "#25232a",
          900: "#1a1820",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.7s ease-out both",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(27, 26, 31, 0.25)",
      },
    },
  },
  plugins: [],
};

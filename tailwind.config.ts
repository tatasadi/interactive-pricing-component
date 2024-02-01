import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        custom: {
          "soft-cyan": "hsl(174, 77%, 80%)",
          "soft-cyan-2": "hsl(174, 100%, 75%)",
          "strong-cyan": "hsl(174, 86%, 45%)",
          "strong-cyan-2": "hsl(174, 65%, 41%)",
          "light-grayish-red": "hsl(14, 92%, 95%)",
          "light-red": "hsl(15, 100%, 70%)",
          "pale-blue": "hsl(226, 100%, 87%)",
        },
        neutral: {
          "very-pale-blue": "hsl(230, 100%, 99%)",
          "light-grayish-blue": {
            DEFAULT: "hsl(224, 65%, 95%)",
            toggle: "hsl(223, 50%, 87%)",
          },
          "grayish-blue": "hsl(225, 20%, 60%)",
          "dark-desaturated-blue": "hsl(227, 35%, 25%)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

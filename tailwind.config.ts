import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        fantasy: {
          // Customizing the dark theme
          ...require("daisyui/src/theming/themes")["fantasy"],
          ".bg": {
            "background-color": "#f9fafb",
          },
        },
      },
      {
        dark: {
          // Customizing the dark theme
          ...require("daisyui/src/theming/themes")["dark"],
          ".bg": {
            "background-color": "#212226",
          },
          ".primary-dark-2": {
            "background-color": "#444fbf",
          },
          ".bg-base-100": {
            "background-color": "#222830",
          },
        },
      },
    ],
  },
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
      margin: {
        "5p": "5%",
        "15p": "15%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bebasNeue: ["var(--font-bebasNeue)", "sans-serif"],
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
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;

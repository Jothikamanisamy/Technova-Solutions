import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E17",
          panel: "#121826",
          border: "#232B3D",
        },
        paper: {
          DEFAULT: "#F7F8FB",
          panel: "#FFFFFF",
          border: "#E3E6EE",
        },
        nova: {
          violet: "#6C5CE7",
          orange: "#FF6B35",
        },
        ink: {
          DEFAULT: "#E8ECF4",
          muted: "#8B93A7",
        },
        inkLight: {
          DEFAULT: "#171B26",
          muted: "#5B6376",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "nova-burst":
          "radial-gradient(circle at 15% 20%, rgba(108,92,231,0.55) 0%, rgba(108,92,231,0) 45%), radial-gradient(circle at 80% 0%, rgba(255,107,53,0.35) 0%, rgba(255,107,53,0) 40%)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;

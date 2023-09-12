import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  preflight: true,
  safelist: [
    "text-code-cyan",
    "text-code-green",
    "text-code-orange",
    "text-code-gray",
    "bg-socials-linkedin",
    "bg-socials-github",
    "bg-socials-telegram",
  ],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      main: {
        dark: "#1C1C1C",
        light: "#FAFAFA",
        green: "#00DC82",
        gray: "#343334",
        orange: "#F47A08",
        cyan: "#07FFFF",
      },
      socials: {
        github: "#4f4e4e",
        linkedin: "#0A66C2",
        telegram: "#3390EC",
      },
    },

    breakpoints: {
      xs: "320px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",
    },
  },
});

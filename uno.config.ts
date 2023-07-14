import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  preflight: true,
  safelist: [
    "text-codeColor-cyan",
    "text-codeColor-green",
    "text-codeColor-orange",
    "text-codeColor-gray",
  ],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      mainDark: "#1C1C1C",
      mainLight: "#FAFAFA",
      codeColor: {
        green: "#00DC82",
        gray: "#343334",
        orange: "#F47A08",
        cyan: "#07FFFF",
      },
      socialNetworks: {
        github: "#4f4e4e",
        linkedin: "#0A66C2",
        telegram: "#3390EC",
      },
    },

    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",
    },
  },
});

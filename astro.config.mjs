// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error - Vite plugin type mismatch between Astro's Vite version and @tailwindcss/vite
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  build: {
    // CSSの最適化を有効化（小さなCSSを自動的にインライン化）
    inlineStylesheets: "auto",
  },
  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro's Vite version and @tailwindcss/vite
    plugins: [tailwindcss()],
  },
});

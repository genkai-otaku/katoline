// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  build: {
    // CSSを常にインライン化してクリティカルパスから除外
    inlineStylesheets: "always",
  },
  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro's Vite version and @tailwindcss/vite
    plugins: [tailwindcss()],
    server: {
      watch: {
        // nix-direnv が nixpkgs 全体を .direnv/flake-inputs に置くため、監視すると inotify 上限を超える
        ignored: ["**/.direnv/**"],
      },
    },
    build: {
      // CSSの圧縮を有効化（デフォルトで有効だが明示的に指定）
      cssMinify: "esbuild",
    },
  },
});

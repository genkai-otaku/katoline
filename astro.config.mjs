// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { remarkCodeFilename } from "./src/lib/remark-code-filename.mjs";
import { transformerCodeFilename } from "./src/lib/shiki-filename-transformer.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCodeFilename],
    shikiConfig: {
      transformers: [transformerCodeFilename()],
    },
  },
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

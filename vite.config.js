import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import svelteSVG from "vite-plugin-svelte-svg";

import webworker from "./vite-webworker-plugin";

export default defineConfig({
  plugins: [
    webworker(),
    svelte({
      preprocess: sveltePreprocess(),
    }),
    svelteSVG(),
  ],
});

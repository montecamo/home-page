import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import webworker from "./vite-webworker-plugin";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    webworker(),
  ],
});

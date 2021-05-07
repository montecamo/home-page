import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import plugin from "./plugin";

export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    exclude: ["@fortawesome/fontawesome-free"],
  },
});

import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "../src"),
      },
    ],
  },
}) satisfies UserConfig;

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: "APP_",
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});

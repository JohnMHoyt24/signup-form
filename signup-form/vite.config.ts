import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      "a523ea6c-6b90-469a-9327-a842b50388da-00-kxmfw1x3nlfo.kirk.replit.dev",
    ],
  },
});

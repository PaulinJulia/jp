import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Gör appen tillgänglig via din lokala IP
    port: 5173, // Du kan ändra till valfri port om du vill
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://todo-fun-backend.onrender.com",
  //       changeOrigin: true,
  //       secure: true,  // Use secure: true in production
  //       ws: true,
  //     },
  //   },
  // },
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/components/Modal.jsx",
      name: "ReactSimpleModaljimmydef",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Assurez-vous d'exclure les dépendances externes
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react()],
});

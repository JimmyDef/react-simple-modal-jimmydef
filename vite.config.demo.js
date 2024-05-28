import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-simple-modal-jimmydef/",
  plugins: [react()],

  build: {
    outDir: "demo", // Placez le dossier de sortie à la racine du projet pour la démo
  },
});

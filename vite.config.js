import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    modules: true,
    scopeBehaviour: "local",
  },
  optimizeDeps: {
    include: ["react-simple-modal-jimmydef/dist/style.css"],
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
  },
  build: {
    lib: {
      entry: "./src/lib/components/Modal.jsx",
      name: "ReactSimpleModaljimmydef",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

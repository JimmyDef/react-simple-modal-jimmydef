import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  css: {
    modules: true,
  },
  optimizeDeps: {
    include: ["react-simple-modal-jimmydef/dist/style.css"],
  },
  plugins: [react(), libInjectCss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
    coverage: {
      exclude: [
        "node_modules/",
        "dist/",
        "coverage/",
        "docs/",
        ".eslintrc.cjs",
      ],
    },
  },
  coverage: {
    exclude: ["node_modules/", "dist/", "coverage/", "**/docs/**"],
  },
  build: {
    lib: {
      entry: "./src/lib/components/Modal.jsx",
      name: "ReactSimpleModaljimmydef",
      formats: ["es", "umd"],
      fileName: (format) => `mylibrary.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        chunkFileNames: "chunks/[name].[hash].js",
        assetFileNames: ({ name }) => {
          // Ensure CSS files have lowercase names
          if (name && name.endsWith(".css")) {
            return `assets/${name.toLowerCase()}`;
          }
          return `assets/[name][extname]`;
        },
        entryFileNames: "index.js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

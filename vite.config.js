import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import react from "@vitejs/plugin-react";

const inputFiles = glob.sync("src/lib/**/*.{js,jsx}");
console.log("Found input files:", inputFiles);

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
      entry:
        inputFiles.length > 0
          ? resolve(inputFiles[0])
          : "./src/lib/components/Modal.jsx",
      name: "ReactSimpleModaljimmydef",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: inputFiles.map((file) => resolve(file)),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

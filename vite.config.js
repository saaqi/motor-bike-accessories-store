import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
  plugins: [
    // htmlPurge(),
    webfontDownload(
        [
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap",
        ]
      ),
  ],
  base: "./",
  server: {
    hot: true,
    port: 3000,
  },
  // build: {
  //   outDir: "./docs",
  // },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/bobdo\.vercel\.app\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "bobdo-assets",
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: { cacheName: "google-fonts", expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
      manifest: {
        name: "বগুড়া অনলাইন রক্তদান সংগঠন",
        short_name: "BOBDO",
        description: "স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ",
        theme_color: "#DC2626",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait-primary",
        icons: [
          { src: "https://bobdo.vercel.app/bobdo.jpg", sizes: "192x192", type: "image/jpeg", purpose: "any maskable" },
          { src: "https://bobdo.vercel.app/bobdo.png", sizes: "512x512", type: "image/png", purpose: "any" },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

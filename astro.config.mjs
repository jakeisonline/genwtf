// @ts-check
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), react()],
  output: "static",
  adapter: vercel(),
})

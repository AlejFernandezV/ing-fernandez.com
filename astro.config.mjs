import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt(),
    react({
      experimentalReactChildren: true,
      include: ["./src/components/magicui/*"],
    }),
  ],

  output: "server",
  adapter: vercel(),
  site: "https://ingfernandez.cloud/",
});

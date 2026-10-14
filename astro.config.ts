import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { siteConfig } from "./src/config/site";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGithubPages ? "https://zamaiz.github.io" : siteConfig.url || undefined,
  base: isGithubPages ? "/bl-ambiental-previa" : "/",
  output: "static",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["marleen-interthronging-synergistically.ngrok-free.dev"],
    },
  },
});

import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" }, // keep this if you have src/server.ts
    }),
    viteReact(), // must come after tanstackStart()
    tailwindcss(),
    nitro(), // add a `preset` here once you pick your host, e.g. nitro({ preset: "cloudflare-pages" }) or "vercel", "node-server", etc.
  ],
});
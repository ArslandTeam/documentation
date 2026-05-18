import { defineConfig } from "vitepress";
import { en } from "./locales/en/config";
import { ru } from "./locales/ru/config";
import { search } from "./locales/search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ru-RU",
  title: "Arsland Docs",
  lastUpdated: true,
  description: "Документация проекта Arsland",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#ffffffff" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  sitemap: {
    hostname: "https://docs.arsland.ru",
  },
  rewrites: {
    "ru/:rest*": ":rest*",
  },
  locales: {
    root: ru,
    // en: en,
  },
  themeConfig: {
    logo: "/logo.svg",
    search: search,
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/e3X5AbSfsj" },
      { icon: "telegram", link: "https://t.me/arsland_minecraft_chat" },
      { icon: "github", link: "https://github.com/ArslandTeam/" },
    ],
  },
});

import sidebar from "./sidebar";

export const en = {
  label: "English",
  lang: "en",
  link: "/en/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/en/" },
      { text: "WebSite", link: "https://arsland.ru" },
    ],
    footer: {
      message: "Released under the MPL-2.0 License.",
      copyright: "Copyright © 2026-ArslandTeam",
    },
    sidebar: sidebar,
  },
};

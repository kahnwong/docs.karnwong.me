import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// import { createWriteStream } from "node:fs";
// import { resolve } from "node:path";
// import { SitemapStream } from "sitemap";

// const links = [];

export default defineConfig({
  title: "Fringe Division",
  description: "Personal docs",

  sitemap: {
    hostname: 'https://docs.karnwong.me'
  },

  markdown: {
    theme: {
      light: "solarized-light",
      dark: "one-dark-pro",
    },
  },

  themeConfig: {
    nav: [
      {
        text: "Knowledge Base",
        link: "/knowledge-base/ops/platform-engineering",
      },
      {
        text: "Life",
        link: "/life/celiac",
      },
      {
        text: "Food",
        link: "/food/food",
      },
    ],

    sidebar: {
      "/knowledge-base/": [
        {
          text: "Data",
          items: [
            {
              text: "Data Engineering",
              items: [
                {
                  text: "Data Engineering",
                  link: "knowledge-base/data/data-engineering/data-engineering",
                },
                {
                  text: "Tools",
                  collapsed: true,
                  items: generateSidebar({
                    scanStartPath:
                      "/knowledge-base/data/data-engineering/tools",
                    useTitleFromFileHeading: true,
                  }),
                },
              ],
            },
            {
              text: "Data Science",
              items: [
                {
                  text: "Data Science",
                  link: "knowledge-base/data/data-science/data-science",
                },
                {
                  text: "Tools",
                  collapsed: true,
                  items: generateSidebar({
                    scanStartPath: "/knowledge-base/data/data-science/tools",
                    useTitleFromFileHeading: true,
                  }),
                },
              ],
            },
            {
              text: "MLOps",
              items: [
                { text: "MLOps", link: "knowledge-base/data/mlops/mlops" },
                {
                  text: "Tools",
                  collapsed: true,
                  items: [
                    {
                      text: "DVC",
                      link: "knowledge-base/data/mlops/tools/dvc",
                    },
                  ],
                },
              ],
            },
            {
              text: "Specialization",
              items: [
                {
                  text: "GIS",
                  items: [
                    {
                      text: "GIS",
                      link: "knowledge-base/data/specialization/gis/gis",
                    },
                    {
                      text: "Tools",
                      collapsed: true,
                      items: generateSidebar({
                        scanStartPath:
                          "/knowledge-base/data/specialization/gis/tools",
                        useTitleFromFileHeading: true,
                      }),
                    },
                  ],
                },
                {
                  text: "NLP",
                  items: [
                    {
                      text: "NLP",
                      link: "knowledge-base/data/specialization/nlp/nlp",
                    },
                    {
                      text: "LLM",
                      link: "knowledge-base/data/specialization/nlp/llm",
                    },
                  ],
                },
                {
                  text: "Web Scraping",
                  items: [
                    {
                      text: "Web Scraping",
                      link: "knowledge-base/data/specialization/web-scraping/web-scraping",
                    },
                    {
                      text: "Tools",
                      collapsed: true,
                      items: generateSidebar({
                        scanStartPath:
                          "/knowledge-base/data/specialization/web-scraping/tools",
                        useTitleFromFileHeading: true,
                      }),
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: "Ops",
          items: [
            {
              text: "DevOps",
              items: generateSidebar({
                scanStartPath: "/knowledge-base/ops/devops",
                useTitleFromFileHeading: true,
              }),
            },
            { text: "SRE", link: "knowledge-base/ops/sre" },
            {
              text: "Platform Engineering",
              link: "knowledge-base/ops/platform-engineering",
            },
            {
              text: "Cloud",
              items: generateSidebar({
                scanStartPath: "/knowledge-base/ops/cloud",
                useTitleFromFileHeading: true,
              }),
            },
            {
              text: "Linux",
              items: generateSidebar({
                scanStartPath: "/knowledge-base/ops/linux",
                useTitleFromFileHeading: true,
              }),
            },
            {
              text: "Tools",
              items: [
                {
                  text: "Infrastructure",
                  items: generateSidebar({
                    scanStartPath: "/knowledge-base/ops/tools/infrastructure",
                    useTitleFromFileHeading: true,
                  }),
                },
                {
                  text: "Containers",
                  items: generateSidebar({
                    scanStartPath: "/knowledge-base/ops/tools/containers",
                    useTitleFromFileHeading: true,
                  }),
                },
                {
                  text: "Databases",
                  items: generateSidebar({
                    scanStartPath: "/knowledge-base/ops/tools/databases",
                    useTitleFromFileHeading: true,
                  }),
                },
                {
                  text: "Networking",
                  items: generateSidebar({
                    scanStartPath: "/knowledge-base/ops/tools/networking",
                    useTitleFromFileHeading: true,
                  }),
                },
                { text: "Git", link: "knowledge-base/ops/tools/git" },
                { text: "GitHub", link: "knowledge-base/ops/tools/github" },
                { text: "Neovim", link: "knowledge-base/ops/tools/neovim" },
                { text: "Nix", link: "knowledge-base/ops/tools/nix" },
                { text: "Misc", link: "knowledge-base/ops/tools/misc" },
              ],
            },
          ],
        },
        {
          text: "Software Engineering",
          items: generateSidebar({
            scanStartPath: "/knowledge-base/software-engineering",
            useTitleFromFileHeading: true,
          }),
        },
        {
          text: "Programming",
          items: [
            { text: "Golang", link: "knowledge-base/programming/golang" },
            { text: "Node", link: "knowledge-base/programming/node" },
            {
              text: "Python",
              items: [
                {
                  text: "Python",
                  link: "knowledge-base/programming/python/python",
                },
                {
                  text: "Cookbook",
                  collapsed: true,
                  items: generateSidebar({
                    scanStartPath:
                      "/knowledge-base/programming/python/cookbook",
                    useTitleFromFileHeading: true,
                  }),
                },
                {
                  text: "Tools",
                  collapsed: true,
                  items: generateSidebar({
                    scanStartPath: "/knowledge-base/programming/python/tools",
                    useTitleFromFileHeading: true,
                  }),
                },
              ],
            },
            { text: "Rust", link: "knowledge-base/programming/rust" },
            { text: "WASM", link: "knowledge-base/programming/wasm" },
          ],
        },
        {
          text: "Misc",
          items: [
            {
              text: "Desktop Apps",
              collapsed: true,
              items: generateSidebar({
                scanStartPath: "/knowledge-base/misc/desktop-apps",
                useTitleFromFileHeading: true,
              }),
            },
            {
              text: "Devices",
              collapsed: true,
              items: generateSidebar({
                scanStartPath: "/knowledge-base/misc/devices",
                useTitleFromFileHeading: true,
              }),
            },
            {
              text: "OS",
              items: generateSidebar({
                scanStartPath: "/knowledge-base/misc/os",
                useTitleFromFileHeading: true,
              }),
            },
            {
              text: "Tools",
              collapsed: true,
              items: generateSidebar({
                scanStartPath: "/knowledge-base/misc/tools",
                useTitleFromFileHeading: true,
              }),
            },
            { text: "Useful Links", link: "knowledge-base/misc/useful-links" },
            { text: "Misc", link: "knowledge-base/misc/misc" },
          ],
        },
      ],
      "/life/": [
        { text: "Celiac", link: "life/celiac" },
        { text: "Repair Shops", link: "life/repair-shops" },
        {
          text: "Gaming",
          items: generateSidebar({
            scanStartPath: "/life/gaming",
            useTitleFromFileHeading: true,
          }),
        },
      ],
      "/food/": generateSidebar({
        scanStartPath: "/food",
        useTitleFromFileHeading: true,
      }),
    },

    socialLinks: [{ icon: "github", link: "https://github.com/kahnwong/docs" }],

    search: {
      provider: "algolia",
      options: {
        appId: "HCNQHDBB8V",
        apiKey: "9f3d3873c241b739f60fce05bca44a42",
        indexName: "fringe-division",
      },
    },
  },

  head: [
    // google analytics
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-M6K7QN1CF6",
      },
    ],
    // umami
    [
      "script",
      {
        defer: "",
        "data-website-id": "de65e38c-cfb9-4709-a04c-9a85f3d88ba6",
        src: "https://umami.karnwong.me/script.js",
      },
    ],
  ],
});

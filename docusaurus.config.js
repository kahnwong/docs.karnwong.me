// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fringe Division",
  // tagline: "Dinosaurs are cool",
  url: "https://docs.karnwong.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  organizationName: "kahnwong", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          routeBasePath: "/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-M6K7QN1CF6",
          anonymizeIP: true,
        },
      },
    ],
    [
      "docusaurus-preset-shiki-twoslash",
      {
        themes: ["nord", "min-light"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Knowledge Base",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "life/",
            activeBasePath: "life",
            label: "Life",
            position: "left",
          },
          {
            to: "food/",
            activeBasePath: "food",
            label: "Food",
            position: "left",
          },
          {
            href: "https://github.com/kahnwong/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      algolia: {
        apiKey: "3211c2ba91e4ed60dd3d7fbb64647fbe",
        indexName: "docusaurus-2",
        appId: "YRGQIFKA99",
      },
    }),
};

module.exports = config;

import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// import { createWriteStream } from "node:fs";
// import { resolve } from "node:path";
// import { SitemapStream } from "sitemap";

// const links = [];

export default defineConfig({
  title: "Fringe Division",
  description: "Personal docs",

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
          collapsed: false,
          items: [
            {
              text: "Data Engineering",
              collapsed: true,
              items: [
                {
                  text: "Data Engineering",
                  link: "knowledge-base/data/data-engineering/data-engineering",
                },
                {
                  text: "Tools",
                  collapsed: true,
                  items: [
                    {
                      text: "Dagster",
                      link: "knowledge-base/data/data-engineering/tools/dagster",
                    },
                    {
                      text: "psycopg2",
                      link: "knowledge-base/data/data-engineering/tools/psycopg2",
                    },
                  ],
                },
              ],
            },
            {
              text: "Data Science",
              collapsed: true,
              items: [
                {
                  text: "Data Science",
                  link: "knowledge-base/data/data-science/data-science",
                },
                {
                  text: "Tools",
                  collapsed: true,
                  items: [
                    {
                      text: "Jupyter",
                      link: "knowledge-base/data/data-science/tools/jupyter",
                    },
                    {
                      text: "Matplotlib / Seaborn",
                      link: "knowledge-base/data/data-science/tools/matplotlib-seaborn",
                    },
                    {
                      text: "NumPy",
                      link: "knowledge-base/data/data-science/tools/numpy",
                    },
                    {
                      text: "Pandas",
                      link: "knowledge-base/data/data-science/tools/pandas",
                    },
                    {
                      text: "Sklearn",
                      link: "knowledge-base/data/data-science/tools/sklearn",
                    },
                    {
                      text: "SQL",
                      link: "knowledge-base/data/data-science/tools/sql",
                    },
                  ],
                },
              ],
            },
            {
              text: "MLOps",
              collapsed: true,
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
            { text: "LLM", link: "knowledge-base/data/llm" },
            {
              text: "Specialization",
              collapsed: true,
              items: [
                {
                  text: "GIS",
                  collapsed: true,
                  items: [
                    {
                      text: "GIS",
                      link: "knowledge-base/data/specialization/gis/gis",
                    },
                    {
                      text: "Tools",
                      collapsed: true,
                      items: [
                        {
                          text: "GDAL",
                          link: "knowledge-base/data/specialization/gis/tools/gdal",
                        },
                        {
                          text: "GeoPandas",
                          link: "knowledge-base/data/specialization/gis/tools/geopandas",
                        },
                        {
                          text: "PostGIS",
                          link: "knowledge-base/data/specialization/gis/tools/postgis",
                        },
                        {
                          text: "QGIS",
                          link: "knowledge-base/data/specialization/gis/tools/qgis",
                        },
                        {
                          text: "Shapely",
                          link: "knowledge-base/data/specialization/gis/tools/shapely",
                        },
                      ],
                    },
                  ],
                },
                { text: "NLP", link: "knowledge-base/data/specialization/nlp" },
                {
                  text: "Visualization",
                  link: "knowledge-base/data/specialization/visualization",
                },
                {
                  text: "Web Scraping",
                  collapsed: true,
                  items: [
                    {
                      text: "Web Scraping",
                      link: "knowledge-base/data/specialization/web-scraping/web-scraping",
                    },
                    {
                      text: "Tools",
                      collapsed: true,
                      items: [
                        {
                          text: "requests",
                          link: "knowledge-base/data/specialization/web-scraping/tools/requests",
                        },
                        {
                          text: "Selenium",
                          link: "knowledge-base/data/specialization/web-scraping/tools/selenium",
                        },
                        {
                          text: "Scrapy",
                          link: "knowledge-base/data/specialization/web-scraping/tools/scrapy",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              text: "Tools",
              collapsed: true,
              items: [
                {
                  text: "Wrangling",
                  collapsed: true,
                  items: [
                    {
                      text: "PySpark",
                      link: "knowledge-base/data/tools/wrangling/pyspark",
                    },
                  ],
                },
              ],
            },
            {
              text: "Misc",
              link: "knowledge-base/data/misc",
            },
          ],
        },
        {
          text: "Ops",
          collapsed: false,
          items: [
            { text: "DevOps", link: "knowledge-base/ops/devops" },
            { text: "SRE", link: "knowledge-base/ops/sre" },
            {
              text: "Platform Engineering",
              link: "knowledge-base/ops/platform-engineering",
            },
            {
              text: "Specialization",
              collapsed: true,
              items: [
                {
                  text: "DevSecOps",
                  link: "knowledge-base/ops/specialization/devsecops",
                },
                {
                  text: "FinOps",
                  link: "knowledge-base/ops/specialization/finops",
                },
                {
                  text: "SecretOps",
                  link: "knowledge-base/ops/specialization/secretops",
                },
              ],
            },
            {
              text: "Base",
              collapsed: true,
              items: [
                {
                  text: "Documentation",
                  link: "knowledge-base/ops/base/documentation",
                },
                {
                  text: "Networking",
                  link: "knowledge-base/ops/base/networking",
                },
                { text: "Security", link: "knowledge-base/ops/base/security" },
              ],
            },
            {
              text: "Cloud",
              collapsed: true,
              items: [
                { text: "Cloud", link: "knowledge-base/ops/cloud/cloud" },
                { text: "AWS", link: "knowledge-base/ops/cloud/aws" },
                { text: "GCP", link: "knowledge-base/ops/cloud/gcp" },
                { text: "Vendors", link: "knowledge-base/ops/cloud/vendors" },
              ],
            },
            {
              text: "Unix",
              collapsed: true,
              items: [
                { text: "Unix", link: "knowledge-base/ops/unix/unix" },
                { text: "Bash", link: "knowledge-base/ops/unix/bash" },
                {
                  text: "Compression",
                  link: "knowledge-base/ops/unix/compression",
                },
                {
                  text: "Networking",
                  link: "knowledge-base/ops/unix/networking",
                },
                { text: "System", link: "knowledge-base/ops/unix/system" },
              ],
            },
            {
              text: "Tools",
              collapsed: false,
              items: [
                {
                  text: "Containers",
                  collapsed: false,
                  items: [
                    {
                      text: "Kubernetes",
                      link: "knowledge-base/ops/tools/containers/kubernetes",
                    },
                    {
                      text: "OpenLens",
                      link: "knowledge-base/ops/tools/containers/openlens",
                    },
                    {
                      text: "Docker",
                      link: "knowledge-base/ops/tools/containers/docker",
                    },
                    {
                      text: "Harbor",
                      link: "knowledge-base/ops/tools/containers/harbor",
                    },
                    {
                      text: "BuildKit",
                      link: "knowledge-base/ops/tools/containers/buildkit",
                    },
                  ],
                },
                {
                  text: "Databases",
                  collapsed: true,
                  items: [
                    {
                      text: "Postgres",
                      link: "knowledge-base/ops/tools/databases/postgres",
                    },
                    {
                      text: "SQL Server",
                      link: "knowledge-base/ops/tools/databases/sqlserver",
                    },
                  ],
                },
                {
                  text: "Networking",
                  collapsed: true,
                  items: [
                    {
                      text: "Caddy",
                      link: "knowledge-base/ops/tools/networking/caddy",
                    },
                    {
                      text: "Tailscale",
                      link: "knowledge-base/ops/tools/networking/tailscale",
                    },
                  ],
                },
                { text: "Packer", link: "knowledge-base/ops/tools/packer" },
                {
                  text: "Terraform",
                  link: "knowledge-base/ops/tools/terraform",
                },
                { text: "Git", link: "knowledge-base/ops/tools/git" },
                { text: "GitHub", link: "knowledge-base/ops/tools/github" },
                { text: "Neovim", link: "knowledge-base/ops/tools/neovim" },
                { text: "sops", link: "knowledge-base/ops/tools/sops" },
                { text: "Misc", link: "knowledge-base/ops/tools/misc" },
              ],
            },
          ],
        },
        {
          text: "Software Engineering",
          collapsed: true,
          items: [
            {
              text: "Software Engineering",
              link: "knowledge-base/software-engineering/software-engineering",
            },
            {
              text: "Web Development",
              link: "knowledge-base/software-engineering/web-development",
            },
            {
              text: "Product Development",
              link: "knowledge-base/software-engineering/product-development",
            },
            { text: "UI", link: "knowledge-base/software-engineering/ux-ui" },
            {
              text: "Management",
              link: "knowledge-base/software-engineering/management",
            },
          ],
        },
        {
          text: "Programming",
          collapsed: true,
          items: [
            { text: "Golang", link: "knowledge-base/programming/golang" },
            {
              text: "Python",
              collapsed: true,
              items: [
                {
                  text: "Python",
                  link: "knowledge-base/programming/python/python",
                },
                {
                  text: "Cookbook",
                  collapsed: true,
                  items: [
                    {
                      text: "Cookbook",
                      link: "knowledge-base/programming/python/cookbook/cookbook",
                    },
                    {
                      text: "datetime",
                      link: "knowledge-base/programming/python/cookbook/datetime",
                    },
                    {
                      text: "Parallel Processing",
                      link: "knowledge-base/programming/python/cookbook/parallel-processing",
                    },
                  ],
                },
                {
                  text: "Tools",
                  collapsed: true,
                  items: [
                    {
                      text: "poetry",
                      link: "knowledge-base/programming/python/tools/poetry",
                    },
                    {
                      text: "pyenv",
                      link: "knowledge-base/programming/python/tools/pyenv",
                    },
                    {
                      text: "pytest",
                      link: "knowledge-base/programming/python/tools/pytest",
                    },
                    {
                      text: "YAML",
                      link: "knowledge-base/programming/python/tools/yaml",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: "Misc",
          collapsed: true,
          items: [
            {
              text: "Desktop Apps",
              collapsed: true,
              items: [
                {
                  text: "Calibre",
                  link: "knowledge-base/misc/desktop-apps/calibre",
                },
                {
                  text: "Foobar",
                  link: "knowledge-base/misc/desktop-apps/foobar",
                },
                {
                  text: "gpodder",
                  link: "knowledge-base/misc/desktop-apps/gpodder",
                },
                {
                  text: "MP3Tag",
                  link: "knowledge-base/misc/desktop-apps/mp3tag",
                },
              ],
            },
            {
              text: "OS",
              collapsed: true,
              items: [
                { text: "Android", link: "knowledge-base/misc/os/android" },
                { text: "Linux", link: "knowledge-base/misc/os/linux" },
                { text: "OSX", link: "knowledge-base/misc/os/osx" },
                { text: "Windows", link: "knowledge-base/misc/os/windows" },
              ],
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
          collapsed: true,
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

  // // https://github.com/vuejs/vitepress/issues/520#issuecomment-1566062351
  // transformHtml: (_, id, { pageData }) => {
  //   if (!/[\\/]404\.html$/.test(id))
  //     links.push({
  //       url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
  //       lastmod: pageData.lastUpdated,
  //     });
  // },
  // buildEnd: async ({ outDir }) => {
  //   const sitemap = new SitemapStream({
  //     hostname: "https://docs.karnwong.me/",
  //   });
  //   const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
  //   sitemap.pipe(writeStream);
  //   links.forEach((link) => sitemap.write(link));
  //   sitemap.end();
  //   await new Promise((r) => writeStream.on("finish", r));
  // },

  // google analytics
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-M6K7QN1CF6",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M6K7QN1CF6');`,
    ],
  ],
});

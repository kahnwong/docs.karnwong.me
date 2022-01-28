module.exports = {
    docs: [{
            type: "category",
            label: "Data Science",
            collapsed: true,
            items: [
                "docs/data-science/jupyter",
                "docs/data-science/pyspark",
                "docs/data-science/sklearn",
                "docs/data-science/gis",
                {
                    type: "category",
                    label: "Web Scraping",
                    items: [
                        "docs/data-science/web-scraping/scrapy",
                        "docs/data-science/web-scraping/references",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Database",
            collapsed: true,
            items: ["docs/database/postgres", "docs/database/postgis"],
        },
        {
            type: "category",
            label: "DevOps",
            collapsed: false,
            items: [
                "docs/devops/aws",
                "docs/devops/caddy",
                "docs/devops/docker",
                "docs/devops/git",
                "docs/devops/kubernetes",
                "docs/devops/terraform",
                "docs/devops/unix",
            ],
        },
        {
            type: "category",
            label: "Python",
            items: [
                "docs/python/environment",
                "docs/python/dependencies",
                "docs/python/snippets",
                "docs/python/database",
            ],
        },
        {
            type: "category",
            label: "Shell",
            items: ["docs/shell/fish", "docs/shell/iterm", "docs/shell/hyperjs"],
        },
        {
            type: "category",
            label: "Tools",
            collapsed: true,
            items: [
                "docs/tools/ffmpeg",
                "docs/tools/neovim",
                "docs/tools/osx",
                "docs/tools/pandoc",
                "docs/tools/youtube-dl",
            ],
        },
        "docs/misc",


    ],
    knowledgeBase: [{
            type: "category",
            label: "Resources",
            collapsed: false,
            items: [
                "knowledge-base/resources/data-science",
                "knowledge-base/resources/devops",
                "knowledge-base/resources/data",
                "knowledge-base/resources/misc",
            ],
        },
        "knowledge-base/celiac",
        "knowledge-base/languages",
        "knowledge-base/repair-shops",
        "knowledge-base/shopping",
        "knowledge-base/utilities",
        "knowledge-base/misc",
    ],
    career: ["career/one-on-one", "career/career-path"],
    recipes: [{
        type: "category",
        label: "Menu",
        items: ["recipes/easy", "recipes/desserts", "recipes/food"],
    }, ],
    languagues: ["languages/russian", "languages/thai"],
};

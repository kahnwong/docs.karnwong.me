module.exports = {
    docs: [{
            type: 'category',
            label: 'Tools',
            collapsed: true,
            items: [
                'docs/tools/postgis',
                'docs/tools/postgres',
                {
                    type: 'category',
                    label: 'Misc',
                    items: [
                        'docs/tools/android',
                        'docs/tools/ffmpeg',
                        'docs/tools/fish',
                        'docs/tools/osx',
                        'docs/tools/pandoc',
                        'docs/tools/youtube-dl',
                    ]
                }
            ],
        },
        {
            type: 'category',
            label: 'Data Science',
            collapsed: false,
            items: [
                'docs/data-science/dvc',
                'docs/data-science/jupyter',
                'docs/data-science/numpy',
                'docs/data-science/pandas',
                'docs/data-science/pyspark',
                'docs/data-science/sklearn',
                'docs/data-science/visualizations',
                {
                    type: 'category',
                    label: 'GIS',
                    items: [
                        'docs/data-science/gis/folium',
                        'docs/data-science/gis/geopandas',
                        'docs/data-science/gis/shapely',
                        'docs/data-science/gis/gdal',
                        'docs/data-science/gis/references',
                    ]
                },
                {
                    type: 'category',
                    label: 'Web Scraping',
                    items: [
                        'docs/data-science/web-scraping/requests',
                        'docs/data-science/web-scraping/scrapy',
                        'docs/data-science/web-scraping/selenium',
                        'docs/data-science/web-scraping/references',
                    ]
                },
            ]
        },
         {
            type: 'category',
            label: 'DevOps',
            items: [
                'docs/devops/apache2',
                'docs/devops/aws',
                'docs/devops/caddy',
                'docs/devops/docker',
                'docs/devops/git',
                'docs/devops/kubernetes',
                'docs/devops/terraform',
                'docs/devops/unix',
            ]
        },
        {
            type: 'category',
            label: 'Python',
            items: [
                'docs/python/environment',
                'docs/python/modules',
                'docs/python/built-in-modules',
                'docs/python/database',
                'docs/python/pdf',
                'docs/python/termcolor',
                'docs/python/tqdm',
            ]
        },
        'docs/misc'
    ],
    knowledgeBase: [{
            type: 'category',
            label: 'Resources',
            collapsed: false,
            items: [
                'knowledge-base/resources/data-science',
                'knowledge-base/resources/devops',
                'knowledge-base/resources/data',
                'knowledge-base/resources/misc',
            ]
        },
        'knowledge-base/etl-saas-intel',
        'knowledge-base/celiac',
        'knowledge-base/languages',
        'knowledge-base/repair-shops',
        'knowledge-base/shopping',
        'knowledge-base/utilities',
    ],
    career: [
                'career/one-on-one',
                'career/career-path',


    ],
    recipes: [{
        type: 'category',
        label: 'Menu',
        items: [
            'recipes/easy',
            'recipes/food',
        ]
    }],
    languagues: [
        'languages/russian',
        'languages/thai',
    ]
};

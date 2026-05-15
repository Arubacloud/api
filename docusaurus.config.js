// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import 'dotenv/config';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Management API Platform',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.URL || 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl:  process.env.BASE_URL || "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Aruba S.p.A.", // Usually your GitHub org/user name.
  projectName: "Cloud Platform", // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','it'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      it: {
        htmlLang:'it-IT',
      },
    },
  },
  scripts: [

    // {
    //   src: '/js/datalayer.js',
    //   async: false,
    // },
    {
      src: '/js/gtmscript.js',
      async: false,
    },

  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          docItemComponent: "@theme/ApiItem",
        },
        // googleTagManager: {
        //   containerId: 'GTM-K5LPKP8',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Cloud Platform",
        logo: {
          alt: "Cloud Platform",
          src: "img/logo-cloud.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "authentication",
          //   position: "left",
          //   label: "Docs",
          // },
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: "docSidebar",
            sidebarId: 'documentsSidebar',
            position: "left",
            label: "API",
          },
          {
            href: "https://arubacloud.com/",
            //href: ({ locale }) => locale === 'it' ?  'https://cloud.it/' : 'https://cloud.com/',
            label: "Aruba Home",
            position: "right",
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `<div style="text-align: start;">
        <small>Copyright © ${new Date().getFullYear()} Aruba S.p.A. - via San Clemente, 53 - 24036 Ponte San Pietro (BG) <br>
        P.IVA 01573850516 - C.F. 04552920482 - C.S. € 4.000.000,00 i.v. - Numero REA: BG – 434483 - All rights reserved </small></div> `
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),
    themes: ["docusaurus-theme-openapi-docs"],
    plugins: [
      [ 
        require.resolve('docusaurus-lunr-search'), 
        {
          languages: ['en'] // language codes
        }
      ],
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            auditing: {
              specPath: "static/openapi/auditing.json",
              outputDir: "docs/documents/auditing",
              label: "Audit",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            metering: {
              specPath: "static/openapi/metering.json",
              outputDir: "docs/documents/metering",
              label: "Metric",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            // container: {
            //   specPath: "static/openapi/container-provider.json",
            //   outputDir: "docs/documents/container",
            //   label: "Container",
            //   proxy: process.env.PROXY_URL,
            //   sidebarOptions: {
            //     groupPathsBy: "tag",
            //     categoryLinkSource: "tag"
            //   }
            // },
            // network: {
            //   specPath: "static/openapi/network-provider.json",
            //   outputDir: "docs/documents/network",
            //   label: "Network",
            //   proxy: process.env.PROXY_URL,
            //   sidebarOptions: {
            //     groupPathsBy: "tag",
            //     categoryLinkSource: "tag"
            //   }
            // }
            storage: {
              specPath: "static/openapi/storage-provider.json",
              outputDir: "docs/documents/storage",
              label: "Storage",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            container: {
              specPath: "static/openapi/container-provider.json",
              outputDir: "docs/documents/container",
              label: "Container",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            compute: {
              specPath: "static/openapi/compute-provider.json",
              outputDir: "docs/documents/compute",
              label: "1.0",
              version: "1.0",
              baseUrl: "docs/documents/compute/aruba-cmpservice-computing-api",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              },
              versions: {
                "1.1": {
                  specPath: "static/openapi/compute-provider_v1.1.json",
                  outputDir: "docs/documents/compute/1.1",
                  label: "1.1",
                  baseUrl: "docs/documents/compute/1.1/aruba-cmpservice-computing-api",
                   //"/docs/documents/compute/1.1/aruba-cmpservice-computing-api",
                }
              }

            },
            network: {
              specPath: "static/openapi/network-provider.json",
              outputDir: "docs/documents/network",
              label: "Network",
              
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            project: {
              specPath: "static/openapi/project.json",
              outputDir: "docs/documents/project",
              //baseUrl: "test_address",
              label: "Project",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            security: {
              specPath: "static/openapi/security-provider.json",
              outputDir: "docs/documents/security",
              //baseUrl: "test_address",
              label: "Security",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            databse: {
              specPath: "static/openapi/database-provider.json",
              outputDir: "docs/documents/database",
              label: "DBaaS",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            schedule:{
              specPath: "static/openapi/schedule-provider.json",
              outputDir: "docs/documents/schedule",
              label: "Schedule",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },            
            baremetal:{
              specPath: "static/openapi/baremetal-provider.json",
              outputDir: "docs/documents/baremetal",
              label: "Bare Metal",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            }, 

          },
        },
        
      ],
      [
        require.resolve('./plugins/custom-encoding'),{}
      ],
      function webpackFallbackPlugin() {
        return {
          name: 'webpack-fallback-plugin',
          configureWebpack() {
            return {
              resolve: {
                fallback: {
                  path: false,
                },
              },
            };
          },
        };
      },
      // [
      //   require.resolve("@cmfcmf/docusaurus-search-local"),
      //   {
      //     // whether to index docs pages
      //     indexDocs: true,
        
      //     // Whether to also index the titles of the parent categories in the sidebar of a doc page.
      //     // 0 disables this feature.
      //     // 1 indexes the direct parent category in the sidebar of a doc page
      //     // 2 indexes up to two nested parent categories of a doc page
      //     // 3...
      //     //
      //     // Do _not_ use Infinity, the value must be a JSON-serializable integer.
      //     indexDocSidebarParentCategories: 0,
        
      //     // whether to index blog pages
      //     indexBlog: true,
        
      //     // whether to index static pages
      //     // /404.html is never indexed
      //     indexPages: false,
        
      //     // language of your documentation, see next section
      //     language: "en",
        
      //     // setting this to "none" will prevent the default CSS to be included. The default CSS
      //     // comes from autocomplete-theme-classic, which you can read more about here:
      //     // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
      //     // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
      //     // overwrites with `!important`, because they might otherwise not be applied as expected. See the
      //     // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
      //     style: undefined,
        
      //     // The maximum number of search results shown to the user. This does _not_ affect performance of
      //     // searches, but simply does not display additional search results that have been found.
      //     maxSearchResults: 8,
        
      //     // lunr.js-specific settings
      //     lunr: {
      //       // When indexing your documents, their content is split into "tokens".
      //       // Text entered into the search box is also tokenized.
      //       // This setting configures the separator used to determine where to split the text into tokens.
      //       // By default, it splits the text at whitespace and dashes.
      //       //
      //       // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
      //       tokenizerSeparator: /[\s\-]+/,
      //       // https://lunrjs.com/guides/customising.html#similarity-tuning
      //       //
      //       // This parameter controls the importance given to the length of a document and its fields. This
      //       // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
      //       // reduces the effect of different length documents on a term’s importance to that document.
      //       b: 0.75,
      //       // This controls how quickly the boost given by a common word reaches saturation. Increasing it
      //       // will slow down the rate of saturation and lower values result in quicker saturation. The
      //       // default value is 1.2. If the collection of documents being indexed have high occurrences
      //       // of words that are not covered by a stop word filter, these words can quickly dominate any
      //       // similarity calculation. In these cases, this value can be reduced to get more balanced results.
      //       k1: 1.2,
      //       // By default, we rank pages where the search term appears in the title higher than pages where
      //       // the search term appears in just the text. This is done by "boosting" title matches with a
      //       // higher value than content matches. The concrete boosting behavior can be controlled by changing
      //       // the following settings.
      //       titleBoost: 5,
      //       contentBoost: 1,
      //       tagsBoost: 3,
      //       parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
      //     }
      //   },
      // ],
    ]
};

export default config;

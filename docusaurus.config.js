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
            type: "docSidebar",
            sidebarId: 'documentsSidebarAI',
            position: "left",
            label: "AI Platform API",
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
            catalog:{
              specPath: "static/openapi/catalog.json",
              outputDir: "docs/documents/catalog",
              label: "Catalog",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            } ,
            aicatalog:{
              specPath: "static/openapi/ai-catalog.yml",
              outputDir: "docs/documents/aimodels", 
              label: "AI Models",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            aitextmanagement:{
              specPath: "static/openapi/ai-text-management.yml",
              outputDir: "docs/documents/aitextmanagement", 
              label: "AI Text Management",
              //proxy: process.env.PROXY_URL,
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag"
              }
            },
            aikeys:{
              specPath: "static/openapi/profile.json",
              outputDir: "docs/documents/aikeys",
              label: "AI Keys",
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
      ]
     ]
};

export default config;

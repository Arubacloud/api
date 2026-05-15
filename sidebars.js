/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import { version } from 'react';

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {


  documentsSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "generated-index",
        title: "Introduction",
        description: "The Aruba Cloud Platform RESTful API is available over HTTPS with JSON as data format. The paradigm uses HTTP methods and HTTP status codes to specify requests and responses.",
        slug: "docs/intro",
      },
      items: require("./docs/sidebar.ts"),
    }, 
    {
      type: "category",
      label: "Project",
      link: {
        type: "generated-index",
        title: "Project API",
        description:
          "This is a description of the API designed to interact with Project.",
        slug: "docs/documents/storage/aruba-project-api",
      },
      items:[       
         {
        type: 'link',
        label: 'Link to KB', // The link label
        href: 'https://kb.cloud.it/cmp/panoramica/progetto.aspx',
        description: 'Project', // The external URL
      }, 
        require("./docs/documents/project/sidebar.ts")],
    }, 
    {
      type: "category",
      label: "Container",
      link: {
        type: "generated-index",
        title: "Container API",
        description:
          "This is a description of the API designed to interact with KaaS.",
        slug: "docs/documents/container/aruba-container-provider-api",
      },
      items: [
        {
          type: 'link',
          label: 'Link to KB', // The link label
          href: 'https://kb.cloud.it/cmp/container/kubernetes.aspx', 
          description: 'Container',// The external URL
        }, 
        require("./docs/documents/container/sidebar.ts")],
    },
    {
      type: "category",
      label: "Compute",
      link: {
        type: "generated-index",
        title: "Compute API",
        description:
          "This is a description of the API designed to interact with Compute API.",
        slug: "docs/documents/compute/aruba-cmpservice-computing-api",
      },
      //items: versionedSidebar
      items:[  
        {
          type: 'link',
          label: 'Link to KB', // The link label
          href: 'https://kb.cloud.it/cmp/computing.aspx',
          description: 'Computing', // The external URL
        },  
        {
          'v1.1': require("./docs/documents/compute/1.1/sidebar.ts")
        }
      ]
      //items: [require("./docs/documents/compute/sidebar.ts")]//,require("./docs/documents/compute/1.1/sidebar.ts")],
    },
    {
      type: "category",
      label: "Storage",
      link: {
        type: "generated-index",
        title: "Storage API",
        description:
          "This is a description of the API designed to interact with Storage API.",
        slug: "docs/documents/storage/aruba-storage-provider-api",
      },
      items: [
        {
          type: 'link',
          label: 'Link to KB', // The link label
          href: 'https://kb.cloud.it/cmp/storage/block-storage.aspx', // The external URL
          description: 'Storage',
        },
        
        require("./docs/documents/storage/sidebar.ts")],
    }, 
    {
      type: "category",
      label: "Network",
      link: {
        type: "generated-index",
        title: "Network API",
        description:
          "This is a description of the API designed to interact with Network API.",
        slug: "docs/documents/network/aruba-network-provider-api",
      },
      items: [
        {
          type: 'link',
          label: 'Link to KB', // The link label
          href: 'https://kb.cloud.it/cmp/networking/elastic-ip.aspx', 
          description: 'Networking', // The external URL
        },
        require("./docs/documents/network/sidebar.ts")],
    },
    {
      type: "category",
      label: "Database",
      link: {
        type: "generated-index",
        title: "DBaaS API",
        description:
          "This is a description of api for interact with DBaaS API.",
        slug: "docs/documents/database/aruba-database-provider-api",
      },
      items: require("./docs/documents/database/sidebar.ts"),
    },  
    {
      type: "category",
      label: "Audit",
      link: {
        type: "generated-index",
        title: "Audit API",
        description:
          "This is a description of the API designed to interact with Audit API.",
        slug: "docs/documents/auditing/aruba-auditing-api",
      },
      items: [
        {
          type: 'link',
          label: 'Link to KB', // The link label
          href: 'https://kb.cloud.it/cmp/utilities/registro-attivita.aspx', 
          description: 'Audit', // The external URL
        },        
        require("./docs/documents/auditing/sidebar.ts")],
    },
    {
      type: "category",
      label: "Metric",
      link: {
        type: "generated-index",
        title: "Metric API",
        description:
          "This is a description of the API designed to interact with Metric API.",
        slug: "docs/documents/metering/aruba-metering-api",
      },
      items: [
        {
          type: 'link',
          label: 'Link to KB', // The link label
          href: 'https://kb.cloud.it/cmp/monitoraggio/avvisi-monitoraggio.aspx', 
          description: 'Metrics', // The external URL
        },
        require("./docs/documents/metering/sidebar.ts")],
    },
    {
      type: "category",
      label: "Security",
      link: {
      type: "generated-index",
      title: "Security API",
      description:
        "This is a description of api for interact with Metric API.",
      slug: "docs/documents/security/aruba-metering-api",
      },
      items: require("./docs/documents/security/sidebar.ts"),
    },
    {
      type: "category",
      label: "Schedule",
      link: {
        type: "generated-index",
        title: "Schedule API",
        description:
          "This is a description of api for interact with DBaaS API.",
        slug: "docs/documents/schedule/aruba-schedule-provider-api",
      },
      items: require("./docs/documents/schedule/sidebar.ts"),
    },
        {
      type: "category",
      label: "Baremetal",
      link: {
        type: "generated-index",
        title: "Baremetal API",
        description:
          "This is a description of api for interact with Baremetal API.",
        slug: "docs/documents/baremetal/aruba-baremetal-provider-api",
      },
      items: require("./docs/documents/baremetal/sidebar.ts"),
    }



  ],
  // versionedSidebar: {
  //   'v1.0': 
  //     require("./docs/documents/compute/sidebar.ts")
  //   ,
  //   'v1.1': require("./docs/documents/compute/1.1/sidebar.ts")
  // }

};

export default sidebars;

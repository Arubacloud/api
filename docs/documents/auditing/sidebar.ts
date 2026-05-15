import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "documents/auditing/aruba-audit-api",
    },
    {
      type: "category",
      label: "Events",
      items: [
        {
          type: "doc",
          id: "documents/auditing/list-audit-events",
          label: "List Audit Events",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

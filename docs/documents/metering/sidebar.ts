import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "documents/metering/aruba-insight-api",
    },
    {
      type: "category",
      label: "AlertRules",
      items: [
        {
          type: "doc",
          id: "documents/metering/create-alert-rule",
          label: "Create Alert Rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/metering/list-alert-rule",
          label: "List Alert Rule",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/metering/get-alert-rule",
          label: "Get Alert Rule",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/metering/update-alert-rule",
          label: "Update Alert Rule",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "documents/metering/delete-alert-rule",
          label: "Delete Alert Rule",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Alerts",
      items: [
        {
          type: "doc",
          id: "documents/metering/list-alerts",
          label: "List Alerts",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Metrics",
      items: [
        {
          type: "doc",
          id: "documents/metering/list-metrics",
          label: "List metrics",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

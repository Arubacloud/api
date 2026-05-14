
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/baremetal/aruba-baremetalprovider-api"
    },
    {
      "type": "category",
      "label": "HPCs",
      "items": [
        {
          "type": "doc",
          "id": "documents/baremetal/create-hpc",
          "label": "Create HPC",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/baremetal/get-hpc",
          "label": "Get HPC",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/baremetal/get-hpc-services",
          "label": "Get HPC services",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/baremetal/list-hpc",
          "label": "List HPC",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/baremetal/check-hpc-creation-status",
          "label": "Check HPC creation status",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/baremetal/rename-hpc",
          "label": "Rename HPC",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/baremetal/set-hpc-automatic-renew",
          "label": "Set HPC automatic renew",
          "className": "api-method put"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  
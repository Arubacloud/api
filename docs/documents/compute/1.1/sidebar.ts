
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/compute/1.1/aruba-cmpservice-computing-api"
    },
    {
      "type": "category",
      "label": "CloudServer",
      "items": [
        {
          "type": "doc",
          "id": "documents/compute/1.1/create-cloud-server",
          "label": "Create CloudServer",
          "className": "api-method post"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  
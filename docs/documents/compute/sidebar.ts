
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/compute/aruba-cmpservice-computing-api"
    },
    {
      "type": "category",
      "label": "CloudServer",
      "items": [
        {
          "type": "doc",
          "id": "documents/compute/get-cloud-server",
          "label": "Get CloudServer",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/compute/delete-cloud-server",
          "label": "Delete CloudServer",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/compute/list-cloud-servers",
          "label": "List CloudServers",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/compute/power-on-cloud-server",
          "label": "Power on CloudServer",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/power-off-cloud-server",
          "label": "Power off CloudServer",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/manage-subnets",
          "label": "Manage Subnets",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/manage-security-groups",
          "label": "Manage SecurityGroups",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/manage-elastic-i-ps",
          "label": "Manage ElasticIPs",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/manage-data-volumes",
          "label": "Manage DataVolumes",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/set-cloud-server-password",
          "label": "Set CloudServer password",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/restore-snapshot-from-a-created-volume",
          "label": "Restore snapshot from a created volume",
          "className": "api-method post"
        }
      ]
    },
    {
      "type": "category",
      "label": "KeyPair",
      "items": [
        {
          "type": "doc",
          "id": "documents/compute/create-key-pair",
          "label": "Create KeyPair",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/compute/get-key-pair",
          "label": "Get KeyPair",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/compute/delete-key-pair",
          "label": "Delete KeyPair",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/compute/list-key-pair",
          "label": "List KeyPair",
          "className": "api-method get"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  
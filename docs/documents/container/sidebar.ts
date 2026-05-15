
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/container/aruba-container-api"
    },
    {
      "type": "category",
      "label": "Backup",
      "items": [
        {
          "type": "doc",
          "id": "documents/container/create-backup",
          "label": "Create backup",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/container/get-backup",
          "label": "Get Backup",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/container/update-backup",
          "label": "Update backup",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/container/delete-backup",
          "label": "Delete backup",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/container/search-backups",
          "label": "Search backups",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "Kaas",
      "items": [
        {
          "type": "doc",
          "id": "documents/container/create-kaa-s",
          "label": "Create KaaS",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/container/get-kaa-s",
          "label": "Get KaaS",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/container/update-kaas-nodepool",
          "label": "Update kaas nodepool",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/container/update-kaa-s",
          "label": "Update KaaS",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/container/delete-kaa-s",
          "label": "Delete KaaS",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/container/list-kaa-s",
          "label": "List KaaS",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/container/attach-volume",
          "label": "Attach Volume",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/container/detach-a-volume-from-a-kaas-node",
          "label": "Detach a volume from a kaas node",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/container/detach-volume",
          "label": "Detach Volume",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/container/download-the-configuration-file-of-the-cluster-kubernetes",
          "label": "Download the configuration file of the cluster kubernetes",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "Registry",
      "items": [
        {
          "type": "doc",
          "id": "documents/container/create-container-registry",
          "label": "Create Container Registry",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/container/get-registry",
          "label": "Get Registry",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/container/update-registry",
          "label": "Update Registry",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/container/update-admin-password-registry",
          "label": "Update Admin Password Registry",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/container/delete-registry",
          "label": "Delete Registry",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/container/search-registries",
          "label": "Search Registries",
          "className": "api-method get"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  
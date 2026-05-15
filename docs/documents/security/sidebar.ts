
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/security/aruba-securityprovider-api"
    },
    {
      "type": "category",
      "label": "Kms",
      "items": [
        {
          "type": "doc",
          "id": "documents/security/create-kms",
          "label": "Create Kms",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/security/create-kmip",
          "label": "Create Kmip",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/security/create-key",
          "label": "Create Key",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/security/get-kms",
          "label": "Get Kms",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/security/get-kmip",
          "label": "Get Kmip",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/security/get-key",
          "label": "Get Key",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/security/update-kms",
          "label": "Update Kms",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/security/update-kmip",
          "label": "Update Kmip",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/security/update-key",
          "label": "Update Key",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/security/delete-kms",
          "label": "Delete Kms",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/security/delete-kmip",
          "label": "Delete Kmip",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/security/delete-key",
          "label": "Delete Key",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/security/list-kms",
          "label": "List Kms",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/security/list-kmip",
          "label": "List Kmip",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/security/list-keys",
          "label": "List Keys",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/security/download-kmip-certificate",
          "label": "Download Kmip certificate",
          "className": "api-method get"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  
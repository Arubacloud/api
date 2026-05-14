
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/project/aruba-cmpservice-project-api"
    },
    {
      "type": "category",
      "label": "Folders",
      "items": [
        {
          "type": "doc",
          "id": "documents/project/create-folder",
          "label": "Create folder",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/project/get-folder",
          "label": "Get folder",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/project/get-metadata",
          "label": "Get Metadata",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/project/update-folder",
          "label": "Update folder",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/project/delete-folder",
          "label": "Delete folder",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/project/list-folders",
          "label": "List folders",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/project/enable-automatic-renew",
          "label": "Enable automatic renew",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/project/disable-automatic-renew",
          "label": "Disable automatic renew",
          "className": "api-method delete"
        }
      ]
    },
    {
      "type": "category",
      "label": "Project",
      "items": [
        {
          "type": "doc",
          "id": "documents/project/create-project",
          "label": "Create Project",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/project/get-project",
          "label": "Get Project",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/project/update-project",
          "label": "Update Project",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/project/delete-project",
          "label": "Delete Project",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/project/list-projects",
          "label": "List Projects",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/project/list-project-resources",
          "label": "List Project Resources",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/project/list-resources",
          "label": "List Resources",
          "className": "api-method get"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  
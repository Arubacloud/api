import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "documents/database/aruba-cmpservice-databaseprovider-api",
    },
    {
      type: "category",
      label: "DatabaseBackup",
      items: [
        {
          type: "doc",
          id: "documents/database/create-database-backup",
          label: "Create DatabaseBackup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/list-database-backups",
          label: "List DatabaseBackups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/delete-database-backup",
          label: "Delete DatabaseBackup",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/database/generate-database-backup-download-link",
          label: "Generate DatabaseBackup download link",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/restore-database-backup",
          label: "Restore DatabaseBackup",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Databases",
      items: [
        {
          type: "doc",
          id: "documents/database/create-database",
          label: "Create Database",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/list-databases",
          label: "List Databases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/delete-database",
          label: "Delete Database",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/database/get-database",
          label: "Get Database",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/restore-scheduled-backup",
          label: "Restore Scheduled Backup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/generate-scheduled-backup-download-link",
          label: "Generate Scheduled Backup download link",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/list-scheduled-backups",
          label: "List Scheduled Backups",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Dbaas",
      items: [
        {
          type: "doc",
          id: "documents/database/create-d-baa-s",
          label: "Create DBaaS",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/list-d-baa-s",
          label: "List DBaaS",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/update-d-baa-s",
          label: "Update DBaaS",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "documents/database/delete-d-baa-s",
          label: "Delete DBaaS",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/database/get-d-baa-s",
          label: "Get DBaaS",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Grants",
      items: [
        {
          type: "doc",
          id: "documents/database/create-grant",
          label: "Create Grant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/list-grants-by-database",
          label: "List Grants by Database",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/delete-grant",
          label: "Delete Grant",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/database/get-grant-by-database",
          label: "Get Grant by Database",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/list-grants-by-user",
          label: "List Grants by User",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/get-grant-by-user",
          label: "Get Grant by User",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "documents/database/create-user",
          label: "Create User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/database/list-users",
          label: "List Users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/delete-user",
          label: "Delete User",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/database/get-user",
          label: "Get User",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/database/set-password",
          label: "Set Password",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

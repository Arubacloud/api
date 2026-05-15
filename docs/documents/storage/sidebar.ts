import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "documents/storage/aruba-storageprovider-api",
    },
    {
      type: "category",
      label: "Backup",
      items: [
        {
          type: "doc",
          id: "documents/storage/get-backup",
          label: "Get Backup",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/storage/update-backup",
          label: "Update Backup",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "documents/storage/delete-backup",
          label: "Delete Backup",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/storage/list-backups",
          label: "List Backups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/storage/create-backup",
          label: "Create Backup",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "BlockStorages",
      items: [
        {
          type: "doc",
          id: "documents/storage/create-block-storage",
          label: "Create BlockStorage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/storage/list-block-storage",
          label: "List BlockStorage",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/storage/update-block-storage",
          label: "Update BlockStorage",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "documents/storage/delete-block-storage",
          label: "Delete BlockStorage",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/storage/get-block-storage",
          label: "Get BlockStorage",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Restore",
      items: [
        {
          type: "doc",
          id: "documents/storage/create-restore",
          label: "Create Restore",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/storage/list-restores",
          label: "List Restores",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/storage/update-restore",
          label: "Update Restore",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "documents/storage/delete-restore",
          label: "Delete Restore",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/storage/get-restore-by-id",
          label: "Get Restore by Id",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Snapshot",
      items: [
        {
          type: "doc",
          id: "documents/storage/create-snapshot",
          label: "Create Snapshot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "documents/storage/list-snapshot",
          label: "List Snapshot",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "documents/storage/update-snapshot",
          label: "Update Snapshot",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "documents/storage/delete-snapshot",
          label: "Delete Snapshot",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "documents/storage/get-snapshot",
          label: "Get Snapshot",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

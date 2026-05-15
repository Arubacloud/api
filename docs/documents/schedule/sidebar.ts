
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/schedule/aruba-cmpservice-scheduleprovider-api"
    },
    {
      "type": "category",
      "label": "BackupPolicy",
      "items": [
        {
          "type": "doc",
          "id": "documents/schedule/create-backup-policy",
          "label": "Create Backup Policy",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/schedule/get-backup-policy",
          "label": "Get Backup Policy",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/schedule/update-backup-policy",
          "label": "Update Backup Policy",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/schedule/delete-backup-policy",
          "label": "Delete Backup Policy",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/schedule/search-backup-policies",
          "label": "Search Backup Policies",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "BackupPolicyAssignment",
      "items": [
        {
          "type": "doc",
          "id": "documents/schedule/create-backup-policy-assignment",
          "label": "Create backupPolicyAssignment",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/schedule/get-backup-policy-assignment",
          "label": "Get Backup Policy Assignment",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/schedule/update-backup-policy-assignment",
          "label": "Update backup policy assignment",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/schedule/delete-backup-policy-assignment",
          "label": "Delete backup policy assignment",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/schedule/search-backup-policy-assignments",
          "label": "Search Backup Policy Assignments",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "Schedule",
      "items": [
        {
          "type": "doc",
          "id": "documents/schedule/create-job",
          "label": "Create Job",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/schedule/get-job",
          "label": "Get Job",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/schedule/get-job-executions",
          "label": "Get Job Executions",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/schedule/update-job",
          "label": "Update Job",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/schedule/delete-job",
          "label": "Delete Job",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/schedule/list-jobs",
          "label": "List Jobs",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/schedule/list-job-plannings",
          "label": "List Job Plannings",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/schedule/list-job-executions",
          "label": "List Job Executions",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/schedule/force-job-execution",
          "label": "Force Job Execution",
          "className": "api-method post"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  
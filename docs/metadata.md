---
id: metadata
sidebar_position: 7
sidebar_label: Metadata and Properties
title: Metadata and Properies
---
## Intro
This section contains information about the metadata and properties of cloud resources. 
To properly manage your cloud resources, read the documentation carefully.
Each resource contains a 'metadata' section and a 'properties' section.


## Metadata
Metadata is common to all resources and contains the following fields: 
- name: Name of the resource
- location: Value of the region in which the resource will be located. 
             Available regions at present: ITBG-Bergamo
- tags: List of tags for the resource
## Properties 
Properties are the specific data for each resource, necessary for the management of the same.
The following is a list of some properties related to specific resources:

## CloudServer
### Cloud Server BootVolume
Before creating a cloud server, you must first create a volume using the dedicated volume creation [API](/docs/documents/storage/create-block-storage). This step is required in order to properly attach the storage to the server during its provisioning process.

The volume must be created with the bootable field set to true, and the image field must be specified with one of the allowed values listed in the table below. Make sure the volume is successfully created and available before proceeding with the server creation request.

List of possible values:

| Name              |Description             | Compatible Flavors |
| :---:             | :---:                  | :---:
| alma8             |alma 8 64bit            | Linux Flavor      |
| DE11-001          |debian 11 64bit         | Linux Flavor      |
| osuse15_2_x64_1_0 |opensuse 15 64bit       | Linux Flavor      |
| alma9             |alma 9 64bit            | Linux Flavor      |
| WS19-001_W2K19_1_0|Windows 2019            | Windows Flavor    |
| DE12-001          |debian 12 64bit         | Linux Flavor      |
| LU22-001          |ubuntu 22 64bit         | Linux Flavor      |
| WS22-001_W2K22_1_0|Windows 2022            | Windows Flavor    |
| LU20-001          |ubuntu 20 64bit         | Linux Flavor      |
| LU24-001          |ubuntu 24 64bit         | Linux Flavor      |

### CloudServer Flavors
List of possible sizes for CloudServers. **You need to use the name in the body of the API**:

#### Cloud Server Linux

|Name | CPU   | Ram (GB) |
| :---| :---: | :---:    |
|CSO4A8  |   4  |   8    |
|CSO8A16 |   8  |   16   |
|CSO12A24|   12 |   24   |
|CSO16A32|   16 |   32   |
|CSO24A48|   24 |   48   |
|CSO32A64|   32 |   64   |
|CSO1A4  |   1  |   4    |
|CSO2A8  |   2  |   8    |
|CSO4A16 |   4  |   16   |
|CSO8A32 |   8  |   32   |
|CSO16A64|   16 |   64   |
|CSO1A2  |   1  |   2    |
|CSO2A4  |   2  |   4    |

#### Cloud Server Windows

|Name | CPU   | Ram (GB) |
| :---| :---: | :---:    |
|CSO12A24  |  12 |    24 |
|CSO16A32  |  16 |    32 |
|CSO16A64  |  16 |    64 |
|CSO1A4    |  1  |    4  |
|CSO24A48  |  24 |    48 |
|CSO2A4    |  2  |    4  |
|CSO2A8    |  2  |    8  |
|CSO32A64  |  32 |    64 |
|CSO4A16   |  4  |    16 |
|CSO4A8    |  4  |    8  |
|CSO8A16   |  8  |    16 |
|CSO8A32   |  8  |    32 |


## KaaS

### KaaS Flavors

List of possible sizes of KaaS nodes: **You need to use the name in the API body**


|Name | CPU   | Ram (GB) | Storage (GB) |
| :---| :---: | :---:    |  :---:       |
|K1A2   |  1   |   2    |    20         |
|K2A4   |  2   |   4    |    40        | 
|K4A8   |  4   |   8    |    80        | 
|K8A16  |  8   |   16   |    120        |
|K1A4R  |  1   |   4    |    40        | 
|K2A8R  |  2   |   8    |    80        | 
|K4A16R  | 4   |   16   |    120        | 
|K12A24  | 12  |   24   |    120        | 
|K16A32  | 16  |   32   |    120        | 
|K24A48  | 24  |   48   |    120        | 
|K32A64  | 32  |   64   |    120        | 
|K8A32R  | 8   |   32   |   120        | 

### Kubernetes Version

To create a KaaS, you must specify the Kubernetes version.
Currently, the following versions of Kubernetes are available:

| Version |
| :---    |
| 1.31.3  |
| 1.32.3  |
| 1.33.2  |

## DBaaS

### DBaaS Engines

List of possible engines for DBaaS. **You need to use the name in the body of the API**
<table>
  <thead>
    <tr>
      <th>Engine type</th>
      <th>Version</th>
      <th>Edition</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MySQL</td>
      <td>8.0</td>
      <td></td>
      <td>mysql-8.0</td>
    </tr>
    <tr>
      <td>Microsoft SQL Server</td>
      <td>2022</td>
      <td>Web</td>
      <td>mssql-2022-web</td>
    </tr>
    <tr>
      <td>Microsoft SQL Server</td>
      <td>2022</td>
      <td>Standard</td>
      <td>mssql-2022-standard</td>
    </tr>
    <tr>
      <td>Microsoft SQL Server</td>
      <td>2022</td>
      <td>Enterprise</td>
      <td>mssql-2022-enterprise</td>
    </tr>
  </tbody>
</table>

### DBaaS Flavors

List of possible sizes for DBaaS. **You need to use the name in the body of the API**
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>CPU</th>
      <th>RAM (GB)</th>
      <th>Engine compatibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DBO1A2</td>
      <td>1</td>
      <td>2</td>
      <td rowspan="4">
        <ul>
          <li>mysql-8.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DBO1A4</td>
      <td>1</td>
      <td>4</td>
    </tr>
    <tr>
      <td>DBO2A4</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>DBO2A8</td>
      <td>2</td>
      <td>8</td>
    </tr>
    <tr>
      <td>DBO4A8</td>
      <td>4</td>
      <td>8</td>
      <td rowspan="2">
        <ul>
          <li>mysql-8.0</li>
          <li>mssql-2022-web</li>
          <li>mssql-2022-standard</li>
          <li>mssql-2022-enterprise</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DBO4A16</td>
      <td>4</td>
      <td>16</td>
    </tr>
    <tr>
      <td>DBO8A16</td>
      <td>8</td>
      <td>16</td>
      <td rowspan="4">
        <ul>
          <li>mysql-8.0</li>
          <li>mssql-2022-enterprise</li>
        </ul>
      </td>	  
    </tr>
    <tr>
      <td>DBO8A32</td>
      <td>8</td>
      <td>32</td>
    </tr>
    <tr>
      <td>DBO12A24</td>
      <td>12</td>
      <td>24</td>
    </tr>
    <tr>
      <td>DBO16A32</td>
      <td>16</td>
      <td>32</td>
    </tr>
    <tr>
      <td>DBO16A64</td>
      <td>16</td>
      <td>64</td>
      <td rowspan="3">
        <ul>
          <li>mysql-8.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DBO24A48</td>
      <td>24</td>
      <td>48</td>
    </tr>
    <tr>
      <td>DBO32A64</td>
      <td>32</td>
      <td>64</td>
    </tr>
  </tbody>
</table>



## Location and Data Center

To create any CMP resource, you must specify the reference Location and Data Center.

Here is the list of possible values:
 
| Location     | DataCenter |
| :---         | :---:      |
| ITBG-Bergamo |   ITBG-1   |
| ITBG-Bergamo |   ITBG-2   |
| ITBG-Bergamo |   ITBG-3   |

:::caution
For 'child' resources such as SecurityGroup (child of the vpc resource) it is not necessary to specify the location, as it will be created in the same location as the 'parent' resource
:::

:::danger
Please note that once the asset has been created in a specific location, it is not possible to change it.
:::


## Schedule

This API allows the creation of a scheduled job, meaning a task that will be automatically executed at a specific time or on a recurring schedule.

Below is a description of the available request body properties:

- **scheduleJobType** (string)
Specifies the type of scheduling for the job.
Possible values include:
  - "OneShot": the job will be executed only once at the specified time.
  - "Recurring": the job will be executed periodically based on the provided cron expression.
  > Example: `"OneShot"`

- **scheduleAt** (string, ISO 8601 format)
The start date and time for the job execution.
If scheduleJobType is "OneShot", this indicates the exact moment when the job will be triggered.
For recurring jobs, it marks the start of the execution window.
  > Example: "2024-07-29T15:51:28.071Z"

- **executeUntil** (string, ISO 8601 format)
Defines the end date and time of the execution window.
The job will not be executed after this time.
This is especially relevant for recurring jobs to limit their execution period.
  > Example: "2024-07-29T15:51:28.071Z"

- **cron** (string)
A cron expression  that defines the recurrence pattern for the job execution.
This field is required only when scheduleJobType is "Recurring".
For one-shot jobs, it can be omitted or left empty.

  > Example: "0 0 * * *" (executes the job every day at midnight)

### Schedule Steps
Defines the sequence of actions that make up the job execution.

:::caution
  Although steps is an array for future extensibility, currently only one step is allowed per job.
:::
Each step represents a single action to be performed on a specified resource, using a defined HTTP method. The action must follow the supported structure and values as described below.


| Field         | Type           | Description              |
| ------------- | -------------- |------------------------- |
| `name`        | string         | A descriptive name for the step |
| `resourceUri` | string         | The URI of the target resource the action applies.|
| `actionUri`   | string         | The URI or identifier of the action to perform. **Only** `"poweron"` and `"poweroff"` are currently supported. |
| `httpVerb`    | string         | The HTTP method used to execute the action. **Only** `"POST"` is allowed at the moment.|
| `body`        | object or null | The request payload. Must be `null` for the supported actions.                                                 |

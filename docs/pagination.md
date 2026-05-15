---
id: pagination
sidebar_position: 6
sidebar_label: Pagination
title: Pagination
---

# Pagination

## Introduction

Pagination is a crucial feature for any API that deals with large sets of data. It allows you to split data into manageable chunks and navigate through it efficiently. This guide outlines the best practices and implementation details for creating a robust pagination API.

## API Parameters

###  Limit and Offset
The simplest form of pagination where limit specifies the number of records per page, and offset specifies the starting point.
- `limit`: Number of records to return per page
- `offset`: Number of records to skip before starting to collect the result set

Example:
```
GET /items?limit=10&offset=20
```


## Response Structure

Pagination responses include:

- **Values**: The array of items for the current page.
- **Links**: URLs to the previous and next pages.

When querying with pagination, the response includes a pagination object with the following structure:

```json
{
    "totalCount": 0,
    "self": "string",
    "prev": "string",
    "next": "string",
    "first": "string",
    "last": "string"
}
```
## Fields

- **totalCount**: (integer) The total number of items available.
  - **Example**: 150

- **self**: (string) The URL of the current page of results.
  - **Example**: "/api/items?offset=25&limit=25"

- **prev**: (string) The URL of the previous page of results. If there is no previous page, this field will be null or an empty string.
  - **Example**: "/api/items?offset=0&limit=25"

- **next**: (string) The URL of the next page of results. If there is no next page, this field will be null or an empty string.
  - **Example**: "/api/items?offset=50&limit=25"

- **first**: (string) The URL of the first page of results.
  - **Example**: "/api/items?offset=0&limit=25"

- **last**: (string) The URL of the last page of results.
  - **Example**: "/api/items?offset=125&limit=25"


### Example
```json
{
    "totalCount": 150,
    "self": "/api/items?offset=25&limit=25",
    "prev": "/api/items?offset=0&limit=25",
    "next": "/api/items?offset=50&limit=25",
    "first": "/api/items?offset=0&limit=25",
    "last": "/api/items?offset=125&limit=25"
}
```


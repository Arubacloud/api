---
id: versioning
sidebar_position: 8
sidebar_label: API Versioning
title: API Versioning
---

## Introduction

To ensure backward compatibility and allow for updates without disruption, we use an **API versioning** system. API versions are specified through the query string parameter `api-version`.

By including the version in the request, clients can ensure that they are using a specific version of the API, allowing for stable integration even when newer versions are released.

## Versioning Format

The API version is passed using the `api-version` query parameter in the URL. For example:

Example:
```
https://api.example.com/resource?api-version=1.1
```

In this example, the client is requesting version `1.1` of the API.

### Query Parameter Structure

- **Parameter Name**: `api-version`
- **Version Format**: `<major>.<minor>`
  - `major`: A breaking change or significant update (e.g., new features, altered behavior).
  - `minor`: Backward-compatible changes, such as bug fixes or minor improvements.

### Example Requests

#### Request with API version 1.0

Example:
```
GET https://api.example.com/resource?api-version=1.0
```

## Version Compatibility

Each new API version is designed to be backward-compatible when only minor version updates occur (e.g., from `1.0` to `1.1`). However, when the major version changes (e.g., from `1.x` to `2.x`), breaking changes may be introduced.

It's recommended to always specify the version your application depends on to avoid unexpected behavior when updates are made.

## Deprecation Policy

Older versions of the API may eventually be deprecated. When a version is deprecated:
- Clients will be notified in advance.
- A sunset period will be provided, during which the deprecated version will still be accessible.
- After the sunset period, the deprecated version will no longer be supported or accessible.

Make sure to monitor the API release notes and update your integrations accordingly to stay compatible with newer versions.

## Best Practices

1. **Specify the version explicitly**: Always include the `api-version` parameter to avoid unexpected breaking changes.
2. **Test with newer versions**: Regularly test your integrations with newer API versions, especially minor versions, to take advantage of improvements and fixes.
3. **Monitor deprecations**: Stay informed about deprecated versions and update your client accordingly.

## Conclusion

Versioning through the query parameter `api-version` provides a flexible way to manage updates and ensure API stability over time. By adhering to these guidelines, you can maintain a reliable integration with our APIs as they evolve.

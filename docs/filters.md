---
id: filters 
sidebar_position: 5
sidebar_label: Filters
title: Filters
---

# Filters

## Introduction

Filtering is a powerful feature in APIs that allows clients to narrow down query results based on specific criteria. This guide outlines best practices and implementation details for designing a flexible and efficient filtering mechanism in your API.

## Key Concepts

1. **Query Parameters**: Use query parameters to specify filters in API requests.
2. **Filter Operators**: Support various operators (e.g., equal to, not equal to, greater than, less than) for each filter criterion.

## API Parameters

### 1. Basic Filtering

A filter needs to be specified as follows:

- `filter=<field>:<operator>(<arguments>)`

A field is the resource key to be filtered specified in dot notation (e.g., user.id). Multiple filters can be specified by setting more filter parameters as shown in the next example:

- `filter=<field1>:<operator1>(<arguments>),filter=<field2>:<operator2>(<arguments>)`

Alternatively, multiple fields can be specified in a single filter definition separated by `;`, which will consider multiple filter criteria as a logical AND:

- `filter=<field1>:<operator1>(<arguments>);<field2>:<operator2>(<arguments>)`

Argument’s value type and field value type must be the same. String values need to be surrounded by double quotes (`"`).

### 2. Filter Operators with Relative Arguments

- **Equality**: `eq:(<argument>)`
- **Inequality**: `ne:(<argument>)`
- **Existence**: `exists:(<argument>)`
- **Greater than equal**: `gte:(<argument>)`
- **Greater than**: `gt:(<argument>)`
- **Less than equal**: `lte:(<argument>)`
- **Less than**: `lt:(<argument>)`
- **In range**: `in:([<arg1>,...])`
- **Not in range**: `nin:([<arg1>,...])`
- **Between values**: `between:([<arg1>,<arg2>])`

## Example Queries

1. Filtering users by id between 1000 and 1200:
```
filter=user.id:between([1000, 1200])
```
2. Filtering users specifying ids:
```
filter=user.id:in([100, 105, 145])
```

3. Filtering users by name:
```
filter=user.name:eq(“Andrew”)
```
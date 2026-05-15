---
id: download-zip-async
sidebar_position: 1
sidebar_label: Download Zip Async Models
title: Download Zip Async Models
---

# Download Zip Async Documentation

The following documentation provides a description of the properties of the class used for storing information related to asynchronous zip download responses.

## `MultiValueMapBody` Class

The `MultiValueMapBody` class represents an object containing data sent as the body of an HTTP request, using a `MultiValueMap<String, Object>`.

### Properties:

1. **`file`**

   - **Type:** `Object`
   - **Description:** Represents the file associated with the request.
   - **Example:** `resource`

2. **`requestId`**

   - **Type:** `Object`
   - **Description:** Identifier of the request.
   - **Example:** `requestId`

3. **`ids`**

   - **Type:** `Object`
   - **Description:** List of identifiers associated with the request.
   - **Example:** `ids`

4. **`isSuccess`**

   - **Type:** `boolean`
   - **Description:** Indicates whether the request was successful.
   - **Example:** `true`

## Usage Example:

```java
MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
body.add("file", resource);
body.add("requestId", requestId);
body.add("ids", ids);
body.add("isSuccess", true);
```

# Controller Documentation for MultiValueMap Input

In the following example, we'll explain how to create a controller in Java Spring that accepts a `MultiValueMap<String, Object>` as input. The provided `MultiValueMap` is assumed to represent a request body with parameters such as "file," "requestId," "ids," and "isSuccess."

## Controller Example

Consider the following controller method that handles a POST request:

```java
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @PostMapping("/processData")
    public ResponseEntity<String> processData(@RequestBody MultiValueMap<String, Object> body) {
        // Your logic to process the MultiValueMap goes here
        // For example, you can access values like body.getFirst("file"), body.getFirst("requestId"), etc.

        // Simulating a successful response for this example
        return ResponseEntity.ok("Data processed successfully");
    }
}
```
---
id: upload-async
sidebar_position: 2
sidebar_label: Upload Async Model
title: Upload Async Model
---

# Upload Async Class Documentation

The `AsyncUploadResponseDocumentDto` class represents a Data Transfer Object (DTO) used for storing information related to asynchronous document upload responses.

## Properties

### 1. `hash`

- **Type:** `String`
- **Description:** The hash associated with the uploaded document.

### 2. `name`

- **Type:** `String`
- **Description:** The name of the uploaded document.

### 3. `haveError`

- **Type:** `boolean`
- **Description:** A flag indicating whether an error occurred during the upload process.

### 4. `messageError`

- **Type:** `String`
- **Description:** If an error occurs (`haveError` is `true`), this property stores the error message providing additional information.

## Constructors

The class has a default no-argument constructor and a builder for convenient object creation.

## Example Usage

```java
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AsyncUploadController {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadDocument(@RequestBody AsyncUploadResponseDocumentDto documentDto) {
    // Perform necessary operations with documentDto
    // For example, you can access properties like documentDto.getHash(), documentDto.getName(), etc.

    // Simulate a success response for this example

        return ResponseEntity.ok("Document uploaded successfully");
    }
}

```

where 

```java

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * This class represents the body of an asynchronous document upload operation.
 * It includes information about the upload operation such as the hash of the uploaded document,
 * the name of the document, whether there was an error during the upload, and the error message if applicable.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsyncUploadResponseDocumentDto {
    /**
     * The hash of the uploaded document.
     */
    private String hash;

    /**
     * The name of the uploaded document.
     */
    private String name;

    /**
     * A flag indicating whether there was an error during the upload operation.
     */
    private boolean haveError;

    /**
     * The error message, if there was an error during the upload operation.
     */
    private String messageError;
}
```


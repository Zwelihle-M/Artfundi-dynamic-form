<?php
// main.form.php

// Set the response header to JSON
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $artist = $_POST['artist'] ?? '';
    $title = $_POST['title'] ?? '';
    $year = $_POST['year'] ?? '';
    $medium = $_POST['medium'] ?? '';
    $inscriptions = $_POST['inscriptions'] ?? '';
    $category = $_POST['category'] ?? '';
    $branch = $_POST['branch'] ?? '';
    $ownership = $_POST['ownership'] ?? '';

    // Perform server-side validation (optional)
    $errors = [];
    if (empty($artist)) {
        $errors[] = 'Artist is required.';
    }
    if (empty($title)) {
        $errors[] = 'Title is required.';
    }
    // Add more validation as needed

    if (!empty($errors)) {
        // Return errors
        echo json_encode(['success' => false, 'errors' => $errors]);
    } else {
        // Process the data (e.g., save to a database or file)

        // Example: Save data to a file (append mode)
        $data = [
            'artist' => $artist,
            'title' => $title,
            'year' => $year,
            'medium' => $medium,
            'inscriptions' => $inscriptions,
            'category' => $category,
            'branch' => $branch,
            'ownership' => $ownership,
            'submitted_at' => date('Y-m-d H:i:s'),
        ];

        // Convert data to JSON and save to a file
        $jsonData = json_encode($data) . PHP_EOL;
        file_put_contents('submissions.txt', $jsonData, FILE_APPEND);

        // Return success response
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully.']);
    }
} else {
    // Handle invalid request method
    echo json_encode(['success' => false, 'errors' => ['Invalid request method.']]);
}
?>

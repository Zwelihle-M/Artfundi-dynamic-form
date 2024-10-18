ArtFundi Dynamic Form Project
=============================

This project demonstrates dynamic form submission using **AJAX**, **PHP**, and **jQuery** for two separate forms. It handles user input, performs client-side validation, and displays success or error messages based on the server response. The project also sets the foundation for saving form data to a SQL database, though that integration was left incomplete due to time constraints.

Table of Contents
-----------------

*   [Overview](#overview)
    
*   [Features](#features)
    
*   [Technologies Used](#technologies-used)
    
*   [Folder Structure](#folder-structure)
    
*   [Form Handling](#form-handling)
    
*   [PHP Submission and SQL Integration](#php-submission-and-sql-integration)
    
*   [How to Run](#how-to-run)
    
*   [Potential Improvements](#potential-improvements)
    

Overview
--------

This project features two forms:

*   A **Main Form** with fields such as artist, title, year, medium, and inscriptions.click next step to save
    
*   A **Second Tab Form** with fields such as email, comment, phone, and message.next step to save
    

Both forms submit data via AJAX and provide user feedback without reloading the page. Although the form data handling via PHP was implemented, saving submissions to a SQL database was not completed.

Features
--------

*   **Dynamic Form Handling**: AJAX-based form submissions without page reloads.
    
*   **Form Validation**: Simple client-side validation for required fields.
    
*   **User Feedback**: Success and error messages after form submission.
    
*   **Custom Dropdowns**: Dropdowns with predefined options for artist, medium, and more.
    
*   **PHP Form Handling**: Server-side PHP script to handle form data.
    
*   **Responsive Design**: Built using Bootstrap for responsiveness across devices.
    

Technologies Used
-----------------

*   **HTML5**: Structure of the web pages.
    
*   **CSS3**: Custom styling, with additional use of Bootstrap for responsiveness.
    
*   **Bootstrap**: Provides responsive grid layouts and components.
    
*   **jQuery**: Simplified JavaScript for handling form submissions and AJAX.
    
*   **PHP**: Handles form data submission on the backend.
    
*   **AJAX**: Enables form submission without refreshing the page.

Folder Structure
=============================

ARTFUNDI-DYNAMIC-FORM/
│
├── css/
│   └── main.css                # Custom styles for the project
│
├── public/
│   ├── favicon/                # Favicon images
│   └── icons/                  # Icons used in the forms and navigation
│
├── scripts/
│   └── main.js                 # JavaScript handling form submissions via AJAX
│
├── submissions/                # Placeholder for saving form submissions (not yet implemented)
│
├── main.form.php                # PHP script for handling form submissions
├── index.html                   # Main HTML file with form structures
├── README.md                    # Project documentation (this file)



Form Handling
=============================

The project uses jQuery for handling form submissions and AJAX for sending the data to the server without a page reload.

Main Form Fields:

Artist (Dropdown)

Title (Text input)

Year (Text input)

Medium (Dropdown)

Inscriptions (Dropdown)

Category (Dropdown)

Branch (Dropdown)

Ownership (Dropdown)

Second Tab Form Fields:

Email (Text input)

Comment (Text input)

Phone Number (Text input)

Message (Textarea)

PHP Submission and SQL Integration
=============================
The PHP script main.form.php accepts form data via POST requests and provides basic server-side validation. My intention was to save the submitted form data into a SQL database. However, I ran out of time and could not fully implement the database integration.

Here’s what I planned for the SQL integration:

SQL Table Creation: I would have created a SQL table to store each submission’s data (artist, title, year, etc.).

Database Connection via PDO: PHP’s PDO class would be used to securely connect to the database and insert the submitted data.

Error Handling: I would implement additional error handling and user feedback based on the success or failure of the SQL queries.

The foundation is laid out, and future steps include setting up the SQL schema and writing the PHP logic for database interactions.
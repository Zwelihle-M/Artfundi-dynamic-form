// modal for adding new artist
$(document).ready(function () {
  // Initialize the modal
  var addArtistModal = new bootstrap.Modal(document.getElementById('addArtistModal'));

  // Show the modal when "( + Add New )" is clicked
  $('.add-new-artist').on('click', function (e) {
    e.preventDefault();
    addArtistModal.show();
  });

  // Handle the submission of the add artist form
  $('#add-artist-form').on('submit', function (e) {
    e.preventDefault();

    // Get the new artist name
    var newArtistName = $('#newArtistName').val().trim();

    // Validate the input
    if (newArtistName === '') {
      alert('Please enter an artist name.');
      return;
    }

    // Check for duplicates
    var duplicate = false;
    $('#artistSelect option').each(function () {
      if ($(this).val().toLowerCase() === newArtistName.toLowerCase()) {
        duplicate = true;
        return false; // Exit the loop
      }
    });

    if (duplicate) {
      alert('This artist already exists.');
      return;
    }

    // Add the new artist to the select dropdown
    $('#artistSelect').append(
      $('<option>', {
        value: newArtistName,
        text: newArtistName,
      })
    );

    // Select the new artist
    $('#artistSelect').val(newArtistName);

    // Reset the form and hide the modal
    $('#add-artist-form')[0].reset();
    addArtistModal.hide();
  });
});


// main tab form submission
$(document).ready(function () {
  // Handle submission of the main form
  $('#main-form').on('submit', function (e) {
    e.preventDefault(); 

    // Clear previous messages
    $('#form-message').html('');

    // Perform simple validation (optional)
    var isValid = true;
    var requiredFields = ['artistSelect', 'title', 'year', 'medium'];

    requiredFields.forEach(function (fieldId) {
      if (!$('#' + fieldId).val()) {
        isValid = false;
        $('#' + fieldId).addClass('is-invalid');
      } else {
        $('#' + fieldId).removeClass('is-invalid');
      }
    });

    if (!isValid) {
      $('#form-message').html('<div class="alert alert-warning">Please fill in all required fields.</div>');
      return;
    }

    // Serialize the form data
    var formData = $(this).serialize();

    // console loggin the data to show the form data in action
    console.log('Form Data:', formData);

    // Send the form data via AJAX
    $.ajax({
      type: 'POST',
      // we're using this endpoint from jsonplaceholder to push data 
      url: 'https://jsonplaceholder.typicode.com/posts', 
      data: formData,
      success: function (response) {
        // Log the server response to the console
        console.log('Server Response:', response);

        // Display success message
        $('#form-message').html('<div class="alert alert-success">Form submitted successfully!</div>');
        // Reset the form
        $('#main-form')[0].reset();
        // Remove validation classes
        $('#main-form .is-invalid').removeClass('is-invalid');
      },
      error: function (xhr, status, error) {
        // Log the error details to the console
        console.error('Error Details:', xhr, status, error);

        // Display error message
        $('#form-message').html('<div class="alert alert-danger">An error occurred: ' + error + '</div>');
      },
    });
  });
});






// second tab form just as an extra example
// $(document).ready(function () {
//   // Existing code for the main form...

//   // Handle submission of the second form
//   $('#second-form').on('submit', function (e) {
//     e.preventDefault();

//     var formData = $(this).serialize();

    
//     $.ajax({
//       type: 'POST',
//       url: 'https://artfundi.com/api/dummysubmit',
//       data: formData,
//       success: function (response) {
//         // Handle success response
//         alert('Your message has been sent successfully!');
//         // Reset the form
//         $('#second-form')[0].reset();
//       },
//       error: function (error) {
//         // Handle error
//         alert('An error occurred. Please try again.');
//       },
//     });
//   });
// });
$(document).ready(function () {
  // Handle submission of the second form
  $('#second-form').on('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Clear previous messages
    $('#second-form-message').html('');

    // Perform simple validation
    var isValid = true;
    var requiredFields = ['email', 'comment', 'phone'];

    requiredFields.forEach(function (fieldId) {
      if (!$('#' + fieldId).val()) {
        isValid = false;
        $('#' + fieldId).addClass('is-invalid');
      } else {
        $('#' + fieldId).removeClass('is-invalid');
      }
    });

    if (!isValid) {
      $('#second-form-message').html('<div class="alert alert-warning">Please fill in all required fields.</div>');
      return;
    }

    // Serialize the form data
    var formData = $(this).serialize();

    // Log the form data to the console
    console.log('Form Data:', formData);

    // Send the form data via AJAX
    $.ajax({
      type: 'POST',
      // We're using a dummy URL, replace with your actual endpoint
      url: 'https://jsonplaceholder.typicode.com/posts', 
      data: formData,
      success: function (response) {
        // Log the server response to the console
        console.log('Server Response:', response);

        // Display success message
        $('#second-form-message').html('<div class="alert alert-success">Form submitted successfully!</div>');
        // Reset the form
        $('#second-form')[0].reset();
        // Remove validation classes
        $('#second-form .is-invalid').removeClass('is-invalid');
      },
      error: function (xhr, status, error) {
        // Log the error details to the console
        console.error('Error Details:', xhr, status, error);

        // Display error message
        $('#second-form-message').html('<div class="alert alert-danger">An error occurred: ' + error + '</div>');
      },
    });
  });
});

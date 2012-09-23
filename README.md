## The Assignment

Implement a Registration Form that

* Has input fields for username and fullname
* Verifies username availability using `GET /usernameavailability/<username>`
* Shows "Username is unavailable" text if username is unavailable
* Sends registration when Register button is pressed, using `POST
  /register { username: x, fullname: y }`
* Shows a feedback "Thanks!" when registration is complete
* Enables Register button only if both informations are entered and
  username is available
* Shows AJAX loading indicators beside the username field (when
  verifying) and the Register button (when registering)
* Disables the Register button also when either registration or username
  verification is pending

Starting point:

* [HTML page](index.html) with the required form elements
* Javascript imports for Bacon.js, Bacon.UI.js, jQuery.js
* Javascript stub embedded in the HTML file
* The required AJAX services are mocked for you using [Mockjax](https://github.com/appendto/jquery-mockjax), so you don't need any background server.

Suggested steps:



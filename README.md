## The Assignment

Implement a Registration Form that

* Has input fields for username and fullname
* Verifies username availability using `GET /usernameavailable/<username>`
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

## Preparations

* Get a browser with developer tools (Chrome will do)
* Read the README of [Bacon.js](https://github.com/raimohanska/bacon.js)
* Clone this repo
* Open [index.html](index.html)

## Starting point

* [HTML page](index.html) with the required form elements
* Javascript imports for Bacon.js, Bacon.UI.js, jQuery.js
* Javascript stub embedded in the HTML file
* The required AJAX services are mocked for you using [Mockjax](https://github.com/appendto/jquery-mockjax), so you don't need any background server.

## Guidelines / intro

I usually start by defining some streams, at this point as global/window
variables, so that I can debug them easier. I included a `show` function
in the stub, so that you can debug your streams easily like this:

    username.onValue(show)

This would lead to all events appearing in the "username" stream to be
printed to the console.

## Suggested steps

* Implement username property (tips: $.asEventStream, map)
* Implement availability query (tips: switch, $.ajax, Bacon.fromPromise)
* Show unavailability information (tips: not(), assign, "toggle")
* What happens with empty username? How to fix? (tips: filter)
* Implement fullname property
* Implement registerClick stream (tips: preventDefault)
* Implement registration request stream(tips: combineTemplate, sampledBy)
* Send POST request to server (tips: switch, $.ajax, type="post")
* Show registration feedback (tips: onValue, $.text)
* Disable button when username is not available or either field is empty (tips: and(), assign, "attr", "disabled")
* Show AJAX indicators when AJAX pending (tips: map, merge, toProperty)
* Disable button when any AJAX is pending
* Needs refactoring? Try Bacon.UI

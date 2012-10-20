This is the Bacon.JS coding excercise we did at ReaktorDevDay 2012. 
Below are the instructions in case you wanna try it yourself. You may also
have a look at the [Full Solution](https://github.com/raimohanska/bacon-devday-code/tree/full-solution) which
is in another branch.

## Preparations

1. Clone this repo

    ~~~
    git clone https://github.com/raimohanska/bacon-devday-code.git
    cd bacon-devday-code
    ~~~

2. Open the index.html file in your browser

    ~~~
    open index.html
    ~~~

3. Make sure you have developer tools in your browser and that you can
   use them. Google Chrome will do. In Chrome (Mac OSX), Go to View ->
Developer -> Developer Tools. You should be able to run Javascript
expressions on the Console tab.

4. Try some expression in the Developer Console, like

    ~~~
    $("#username input").asEventStream("keyup")
    ~~~

5. Have a look at Bacon.js
   [readme](https://github.com/raimohanska/bacon.js/blob/master/README.md)

## Map

Here's how I modeled the problem for Bacon.js reactive code.

![diagram](https://raw.github.com/raimohanska/bacon-devday-code/master/images/registration-form-bacon.png)

Side-effects are not depicted.

## Steps to success

1. Disable button if username is missing
  * define usernameEntered property
  * assign side-effect: setDisabled for registerButton

2. Disable also if full name is missing
  * define fullname and fullnameEntered properties
  * use .and() to change the condition for enabling the button

3. Disable also if username unavailable
  * include usernameAvailable to the condition for enabling the button

4. Show AJAX indicator when AJAX pending
  * define usernameRequestPending property as usernameResponse.pending(usernameRequest)
  * assign side effect to show usernameAjaxIndicator

5. Disable button when AJAX is pending

6. Implement registerClick stream
  * tip: do(".preventDefault")

7. Implement registrationRequest
  * combine username and password into a new property that would be the data given to JQuery.ajax
  * can use username.combine(..) or Bacon.combineTemplate
  * type: "POST"

8. Make this a stream of registration requests, send when the button is clicked
  * .sampledBy(registerClick)

9. Create registrationResponse stream
  * as in usernameResponse stream

10. Show feedback

11. Disable button after registration sent

12. Show ajax indicator for registration POST

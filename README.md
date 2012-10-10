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

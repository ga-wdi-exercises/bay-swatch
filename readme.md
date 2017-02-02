# Events

# User Stories

0. *When I mouse-over on a color, I want to see its RGB color value in a box on the screen.*
  > Breaking it down:
  0. Select all swatch elements and store as a reference (*i.e. in a variable*)
  0. Add event listeners to each swatch element to listen for mouse-overs
  0. Get the value of each swatch element's color and change the text of the 'output box' to that value

0. *When my mouse leaves a color-box, I want the div to fade out when the mouse enters the color-box, then fade in when the mouse leaves.*
  >Breaking it down:
  0. Determine what event corresponds to the mouse leaving the boundaries of a DOM element
  0. Attach event listeners to each colored div to handle the mouse-leave event
  0. Search jQuery documentation for methods to fade a DOM element in and out

0. *I'd like to be able to add more colors of my choosing, so that I'm not limited to just shades of black, red, green, or blue. I also want to be able to add any number of a certain color.*

  >Breaking it down:
  0. Store user input from the input text box and `console.log()` that stored value.  
  0. Append a div with a `class` of `swatch` to `<div class="container">`. You may also want to attach an additional class to the appended div to mark the color entered by the user.
  0. Write a for-loop to add the requested color the requested number of times.

0. *I'd to be able to click on a color and then another color, and switch their values (switch their places).*
  > Breaking it down:
  0. You'll not only need to keep track of the number of clicks, but you'll need to differentiate even-numbered clicks (if the user has has clicked an even number of times) from odd-numbered clicks (if the user has clicked an odd number of times).
  0. You'll also need to store the color value of the first div clicked and the color value of the second div to make the swap.

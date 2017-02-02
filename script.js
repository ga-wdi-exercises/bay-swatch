// your code here
var swatchDivs = $(".swatch");

swatchDivs.mouseover(function(){
  var thisBgColor = $(this).css("background-color");
  $("#output").html(thisBgColor)
})

// I've refactored exercise 2 solution here to get rid of
// the buggy display behavior
swatchDivs.mouseenter(
  function(){
    $(this).fadeOut().fadeIn()
  }
)

// exercise 3 solution
$("form").submit(function(evt){
  evt.preventDefault();
  var colorInput = $("form input").eq(0).val();
  var numberInput = $("form input").eq(1).val();

  for (var i = 1; i <= numberInput; i++){
    var newDiv = $("<div class='swatch'></div>");
    newDiv.addClass(colorInput);
    newDiv.css("background-color", colorInput);
    $(".container").append(newDiv);
  }
})

// exercise 4 solution

//we're declaring these outside of the callback function below
//so that the program can 'remember' what these values are outside
// of the ***scope*** of that function. otherwise, they would be
// garbage-collected, meaning that the variables inside the function 'die' in a sense
var clickCounter = 0;
var divClickedFirst;
var divClickedSecond;
swatchDivs.click(function(){

  //increments click counter
  clickCounter++;

  // the reason we are checking for an even or odd number of clicks is to
  // determine which is the first element clicked on, and the second element
  // clicked on. the clickCounter starts at 0

  // checks to see if number is odd using the modulus operator %
  if (clickCounter % 2 == 1) {
    divClickedFirst = $(this);
  } else {
    // else, there's an even number of clicks
    divClickedSecond = $(this);
    // we capture the value before we reassign them in separate variables
    var divClickedFirstBgColor = divClickedFirst.css("background-color");
    var divClickedSecondBgColor = divClickedSecond.css("background-color");

    //making the swap
    divClickedFirst.css("background-color", divClickedSecondBgColor)
    divClickedSecond.css("background-color", divClickedFirstBgColor)
  }

})

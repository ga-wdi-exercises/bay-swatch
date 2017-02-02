// your code here
var swatchDivs = $(".swatch");

swatchDivs.mouseover(function(){
  var thisBgColor = $(this).css("background-color");
  $("#output").html(thisBgColor)
})

swatchDivs.hover(
  function(){
    $(this).fadeOut()
  },
  function(){
    $(this).fadeIn()
  }
)

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

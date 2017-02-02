// your code here
var swatchDivs = $(".swatch");

swatchDivs.mouseover(function(){
  //need to isolate whatever element was clicked
  //get some css value related to its color
  var thisBgColor = $(this).css("background-color");
  console.log(thisBgColor);
  // $("#output").text(thisBgColor) will work also
  $("#output").html(thisBgColor)
})

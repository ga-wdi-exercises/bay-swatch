// your code here
var swatchDivs = $(".swatch");

swatchDivs.mouseover(function(){
  var thisBgColor = $(this).css("background-color");
  $("#output").html(thisBgColor)
})

//2nd exercise
// swatchDivs.mouseenter(function(){
//   $(this).fadeOut()
// })
//
// swatchDivs.mouseleave(function(){
//   $(this).fadeIn()
// })

swatchDivs.hover(
  function(){
    $(this).fadeOut()
  },
  function(){
    $(this).fadeIn()
  }
)

// @ts-check //debug工具，但還需要再安裝一些東西: https://medium.com/html-test/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B-%E4%BD%BF%E7%94%A8npm%E5%A5%97%E4%BB%B6-317beefdf182
function myFun() {
  alert("測試文字 myFun");
}

function matchHeightWhenHover(){
  $(".projectArea" ).mouseover(function() {
    var hoveredIconHeight = $(".hoveredFont_icon").height();
    var hoveredTextHeight = hoveredIconHeight  +"px";
    $(".hoveredText_icon").css({"line-height": hoveredTextHeight});
  });
}

$(function () {
  // myFun();
  matchHeightWhenHover();

  
});

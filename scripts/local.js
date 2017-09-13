/*
document ready
selectors
console.log
.hide
parseInt() and .css('marginLeft')
(fun css: transition: all 0.2s;)
*/

$(function() {

  var clickHandler = function() {
    console.log('hi');

    var left = $('#a').css('marginLeft');
    var leftPx = parseInt(left) + 100;
    $('.boxy').css('marginLeft', leftPx + 'px');

  }

  $('#move-button').click(clickHandler);



});

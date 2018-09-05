/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#f7f7f7',
    lineColor: '#f7f7f7',
		
  }).css('opacity','0.2');
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
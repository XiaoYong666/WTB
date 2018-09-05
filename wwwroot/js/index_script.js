$(function(){
	
//1
	$(".rsp").hide();
	$(".clearfix li").hover(function(){
		$(".rsp",this).fadeTo(1000,1);
		$(".text",this).animate({
			"left":0,
		})
	},function(){
		$(".rsp",this).fadeTo(200,0)
		$(".text",this).animate({
			"left":380,
		})
		.queue(function(next){
			$(this).css("left",-380)
			next()
		})
		
	})

});


    (function (doc, win) {
        var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 21.333333333 * (clientWidth / 320) + 'px';
                };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);


$(document).ready(function () {
	$('.panel-title').on('click', function () {
		if($(this).prev('.accordion-toggle').hasClass('collapsed')){
			$('.accordion-toggle').addClass('collapsed');
			$(this).prev('.accordion-toggle').removeClass('collapsed');

		}
		else
		{
			$(this).prev('.accordion-toggle').addClass('collapsed');
		}
	});
});



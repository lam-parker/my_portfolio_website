//var BOOL = false;
//
//$(window).scroll(function() {
//
//
//  var current = $(this).scrollTop();
//	if ((current > 0 /*&& current < 500*/) && !BOOL) {
//
//			$.each($(".test"), function() {
//					console.log('executing .each function');
//					console.log('executing scrollTop()');
//					var setter = $(this).attr('src');
//					console.log('resetting src attr');
//			  		imgsrc = $(this).attr('src', setter);
//			  	  	visible = $('img.test').css('opacity') != 0;
//
//			  		 BOOL = true;
//  			if (!visible) $('img.test').fadeTo(400,1);
//  			else if (visible) $('img.test').fadeTo(0,0);
//  			});
//  		}
//  	else if (current <= 0 /* || current >= 500*/) {
//  			var setter = $(this).attr('src');
//  			imgsrc = $(this).attr('src', setter);
//  			$('img.test').fadeTo (0,0);
//  			BOOL = false;
//  	}
//		});




$(function() {

    var target = $('img.gif'),
    path = [], zenith, nadir, current,
    modern = window.requestAnimationFrame;

    target.each(function() {

        path.push(this.src);
    });

    $(window).on('load resize', storeDimensions).on('load scroll', function(e) {

        current = $(this).scrollTop();

        if (e.type == 'load') setTimeout(inMotion, 150);
        else inMotion();

    function inMotion() {

        if (modern) requestAnimationFrame(checkFade);
        else checkFade();
    }
    });

function storeDimensions() {

    clearTimeout(redraw);

    var redraw = setTimeout(function() {

        zenith = []; nadir = [];

        target.each(function() {

            var placement = $(this).offset().top;

            zenith.push(placement-$(window).height());
            nadir.push(placement+$(this).outerHeight());
        });
    }, 150);
}

function checkFade() {

    target.each(function(i) {

        var initiated = $(this).hasClass('active');

        if (current > zenith[i] && current < nadir[i]) {
        if (!initiated) $(this).attr('src', path[i]).addClass('active').fadeTo(500,1);
        }
        else if (initiated) $(this).removeClass('active').fadeTo(0,0);
    });
}
});



//tootip

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

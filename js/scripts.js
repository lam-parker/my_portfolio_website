// $(window).scroll(function() {

//   var current = $(this).scrollTop(),
//   // path = $('img').src;
//   path = 'flash.gif';
//   visible = $('img').css('opacity') != 0;

//   if (current > 50) {
//   if (!visible) $('img').attr('src', path).fadeTo(400,1);
//   }
//   else if (visible) $('img').fadeTo(0,0);
// });

var BOOL = false;

$(window).scroll(function() {



  var current = $(this).scrollTop();
  // path = 'http://www.anony.ws/i/2015/09/25/text.gif',
  // path = $(this).find('img').attr('src');
  // FIXME change hard-coded pixel value to when gif is visible on viewing screen
	if ((current > 70 /*&& current < 500*/) && !BOOL) {

			$.each($(".test"), function() {
					console.log('executing .each function');
					console.log('executing scrollTop()');
					var setter = $(this).attr('src');
					console.log('resetting src attr');
			  		imgsrc = $(this).attr('src', setter);
			  //console.log(imgsrc);
			  	  	visible = $('img.test').css('opacity') != 0;

			  		 BOOL = true;
  			if (!visible) $('img.test').fadeTo(400,1);
  			else if (visible) $('img.test').fadeTo(0,0);
  			});
  		}
  	else if (current <= 70 /* || current >= 500*/) {
  			var setter = $(this).attr('src');
  			imgsrc = $(this).attr('src', setter);
  			$('img.test').fadeTo (0,0);
  			BOOL = false;
  	}
  		//
		});


	// });
//   visible = $('img').css('opacity') != 0;

//   if (current > 200) {
//   	if (!visible) $('img').attr('src', imgsrc).fadeTo(400,1);
//   }
//   else if (visible) $('img').fadeTo(0,0);
// });




//tootip

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

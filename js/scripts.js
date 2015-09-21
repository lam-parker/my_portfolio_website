$(window).scroll(function() { // This is the line we left out!  Oops :)
	if ($(window).scrollTop() > 70 ) { // Scroll slowly down, and you'll see that
										// when the top position of the scroll bar
										// is greater than 70 pixels from the top of
										// the window, the <div> with class="row4"
										// appears slowly.
	   $('.row4').show("slow");
	} else {
	    $('.row4').hide();
	}
});
​
// Here's the direct CodePen for the guy who created the tutorial I sent you.
// I will personally be playing with some of his CodePens to implement some
// better animations with jQuery and CSS on my project!
​
// http://codepen.io/SitePoint/


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(window).scroll(function(){
	parallax()
})

function parallax() {
	var windowScroll = $(window).scrollTop();

	$('.layer-one').css('background-position', 'center '+(windowScroll)+'px')

}
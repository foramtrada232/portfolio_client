
$(document).ready(function () {
	$(".awesomplete li").attr('class', 'divider');
	$('.loader').fadeOut('slow', function () {
		$('body').removeAttr('style');
	});
	 // add all to same gallery
	 $(".gallery a").attr("data-fancybox","mygallery");
	 // assign captions and title from alt-attributes of images:
	 $(".gallery a").each(function(){
	   $(this).attr("data-caption", $(this).find("img").attr("alt"));
	   $(this).attr("title", $(this).find("img").attr("alt"));
	 });
	 // start fancybox:
	   $(".gallery a").fancybox();
	   //fancybox end
	$('.website_developement_slider, .mobile_app_developement_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		draggable: false,
		nextArrow: '<button class="slick-next slick-arrow" type="button"><img src="images/slider_arrow_right.png"></button>',
		prevArrow: '<button class="slick-prev slick-arrow" type="button"><img src="images/slider_arrow_left.png"></button>'
	});
	$('.laptop_image_slider, .mobile_image_slider, .mobile_development_details_slider, .landing_page_image_slider, .logo_slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		draggable: false,
		nextArrow: '<button class="slick-next slick-arrow" type="button"><img src="images/slider_arrow_right.png"></button>',
		prevArrow: '<button class="slick-prev slick-arrow" type="button"><img src="images/slider_arrow_left.png"></button>'
	});
	$('.search_btn').click(function () {
		$(this).addClass('active_filter');
		$(this).next('.filter_section').addClass('open_filter');
		$('body').css({ 'overflow': 'hidden' });
	});
	$('a.close_filter').click(function () {
		$('.search_btn').removeClass('active_filter');
		$('.filter_section').removeClass('open_filter');
		$('body').removeAttr('style');
	});
	$("#jump_to_next").click(function () {
		$('html,body').animate({
			scrollTop: $(".about_our_section").offset().top
		}, 1000);
	});
	$(".back_to_top").click(function (event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() > 600) {
			$('.back_to_top').fadeIn();
		} else {
			$('.back_to_top').fadeOut();
		}
	});
});
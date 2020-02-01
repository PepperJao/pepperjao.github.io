$(function(){
	// CLIENTS PAGE
	$('.clients__slider').slick({
		arrows: false,
		fade: true,
	});
	$('.clients__sliderArrow-prev').on('click', function(){
		$('.clients__slider').slick('slickPrev');
	});
	$('.clients__sliderArrow-next').on('click', function(){
		$('.clients__slider').slick('slickNext');
	});
	// CONTENT 5
	$('.contentV4__items').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 769,
				settings:{
					slidesToShow: 1,
					dots: true,
					fade: true
				}
			}
		]
	});
	// CONTENT 6
	$('.contentV5__items').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 769,
				settings:{
					slidesToShow: 1,
					dots: true,
					fade: true
				}
			}
		]
	});
	// CONTENT 9 PAGE
	$('.contentV8__slider').slick({
		arrows: false,
		dots: true,
		fade: true,
	});
	// CONTENT 11 PAGE
	var content11slider = $('.contentV10__slider');
	content11slider.slick({
		arrows: false,
		fade: true,
	});
	content11slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.contentV10__pagination').text(i + '/' + slick.slideCount);
	});
	$('.contentV10__pagination').text('1/'+$('.contentV10__item').length);
	$('.contentV10__arrow-prev').on('click', function(){
		$('.contentV10__slider').slick('slickPrev');
	});
	$('.contentV10__arrow-next').on('click', function(){
		$('.contentV10__slider').slick('slickNext');
	});
	// HEADER 7
	$('.headerV3__slider').slick({
		arrows: false,
		dots: true,
		appendDots: $('.headerV3__dots'),
		fade: true,
	});
	$('.headerV3__arrow-prev').on('click', function(){
		$('.headerV3__slider').slick('slickPrev');
	});
	$('.headerV3__arrow-next').on('click', function(){
		$('.headerV3__slider').slick('slickNext');
	});
	// HEADER 15
	$('.headerV8__items').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 769,
				settings:{
					slidesToShow: 1,
					dots: true,
					fade: true
				}
			}
		]
	});
	// ALL HEADERS
	$('.header__menuIcon').on('click', function(){
		$(this).toggleClass('header__menuIcon-active');
		$('.menu').toggleClass('menu-show');
		$('body').toggleClass('body-disabled');
		return false;
	});
	$(window).on('scroll resize', function(){
		var position = $(window).scrollTop();
		console.log(position);
		if(position > 100){
			$('.header__head').addClass('header__head-active');
		}else{
			$('.header__head').removeClass('header__head-active');
		}
	})
	// CONTACT 2
	$('.contactsV2__link').on('click', function(){
		$('.contactsV2-first').removeClass('hide');
		$('.contactsV2-second').addClass('hide');
		return false;
	});
	$('.contactsV2__button').on('click', function(){
		$('.contactsV2-first').addClass('hide');
		$('.contactsV2-second').removeClass('hide');
		return false;
	});
	// CONTACT 4
	$('#contactsV4__page2__link').on('click', function(){
		$('.contactsV4 .container').addClass('hide');
		$('#contactsV4__page2').removeClass('hide');
		return false;
	});
	$('#contactsV4__page1__link').on('click', function(){
		$('.contactsV4 .container').addClass('hide');
		$('#contactsV4__page1').removeClass('hide');
		return false;
	});
	// CONTACT 5
	$('#contactsV5__page2__link').on('click', function(){
		$('.contactsV5 .container').addClass('hide');
		$('#contactsV5__page2').removeClass('hide');
		return false;
	});
	$('#contactsV5__page1__link').on('click', function(){
		$('.contactsV5 .container').addClass('hide');
		$('#contactsV5__page1').removeClass('hide');
		return false;
	});
})

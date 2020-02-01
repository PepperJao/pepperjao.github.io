$(function(){
	$('.slider').slick({
		arrows: true,
		slidesToShow: 2,
	});

	setInterval(slideImage, 2500, '.contacts__phone__img');
	setInterval(slideImage, 2500, '.contacts__laptop__img');

});

function slideImage(selector){
	var backgroundPos = $(selector).css('backgroundPosition').split(" ");
	var position = parseInt(backgroundPos[1]) + 50;
	console.log(position);
	if(position > 110){
		position = 0;
	}
	$(selector).css('background-position', 'center ' + position + '%');
}

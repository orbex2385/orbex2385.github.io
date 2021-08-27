$(document).ready(function(){

	$(window).scroll(function(){
		var anchoVentana = $(window).width();

		if(anchoVentana > 800){

			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform': 'translate(0px, ' + scroll / 2 +'%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 +'%)'
			});
		}
	});

	$(window).resize(function(){

		var anchoVentana = $(window).width();
		
		if(anchoVentana < 800){

			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});

// Falta Actualizar el alto del header cuando el ancho de pantalla es
// menor a 800px, se debe ajustar para que no se pierda mientras tanto con}
// css se ajusta
		}
	});

});

var acercaDe = $('#acerca-de').offset().top,//Almacena posicion de la seccion
	trabajos = $('#trabajos').offset().top,
	contacto = $('#contacto').offset().top;

	$('#btn-acercade').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe
		}, 700);
	});

	$('#btn-trabajos').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: trabajos
		}, 600);
	});

	$('#btn-contacto').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		}, 600);
	});
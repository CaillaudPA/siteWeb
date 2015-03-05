$('document').ready(function(){

	//jQuery en rapport avec le menu NAV
	//Définir toutes les variables
	var menuDerouler = $('#menuDerouler');

	//Evenement
	menuDerouler.click(function () {
		// body...
		{
			$('#menuDeroulerSlide').slideToggle("slow");
		}
	})

	//Supprimer le float après le menu
	$('nav').nextAll().css('clear', 'both');
	




});
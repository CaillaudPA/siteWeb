hauteurImgPrincipalOrigine = 943;
largeurImgPrincipalOrigine = 400;

$('document').ready(function(){

	$(window).resize(function() {
		redimentionnerImage();
	});


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

function afficherInputRecherche(){
	$('#recherche').css('display', 'inline');
	$('#rechercheDiv').css('display', 'inline');

	document.getElementById("recherche").focus();
}

function enleverInputRecherche(){
	$('#recherche').css('display', 'none');
	$('#rechercheDiv').css('display', 'none');
}

function redimentionnerImage(){
	newHeight = $(window).width();
	newWidth = $(window).width();

	if(newWidth > largeurImgPrincipalOrigine){
		newWidth = largeurImgPrincipalOrigine;
	}

	if(newHeight > hauteurImgPrincipalOrigine){
		newHeight = hauteurImgPrincipalOrigine;
	}


	alert(newWidth+" | "+newHeight);
}



function redimimage(largeur, hauteur, largeurc, hauteurc) {
    coord=new Array(2);
    ratio=hauteur/largeur;
    //si l'image réelle est plus petite en largeur et hauteur
    if (largeur < largeurc && hauteur < hauteurc) {
        while (largeur < largeurc && hauteur < hauteurc) {
            largeur++;
            hauteur=Math.round(largeur*ratio);
        }
    } else {
        while (largeur > largeurc || hauteur > hauteurc) {
            largeur--;
            hauteur=Math.round(largeur*ratio);
        }
    }
    coord[0]=largeur;
    coord[1]=hauteur;
    return(coord);
}
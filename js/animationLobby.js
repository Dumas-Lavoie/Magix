let compteur = 0; // Compteur de ticks
let spriteList = [];



window.addEventListener("load", () => {
	// document.querySelector("body").background.;
    // canvas = document.querySelector("canvas");
    // ctx = canvas.getContext("2d");

    // Ce fichier JS est le fichier pour la page d’authentification
    // canvas = document.querySelector("body").background("images/background2.gif");

	$('body').css('background-image', 'url(images/background2.gif)')
	$('body').css('background-size', 'cover');
	$('body').css('background-repeat', 'no-repeat');
	// $('body').css('width', '100%');
    tick();
});


const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const sprite = spriteList[i];
        let alive = sprite.tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}

const redirectPratique = () => {
    window.location.replace("redirectPratique.php");
}

const redirectOnline = () => {
    window.location.replace("redirectOnline.php");
}
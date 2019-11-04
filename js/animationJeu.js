let compteur = 0; // Compteur de ticks
let spriteList = [];



window.addEventListener("load", () => {
	document.querySelector("body").background;
	document.querySelector("canvas").style.position = "absolute"
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    // Ce fichier JS est le fichier pour la page d’authentification
    // canvas = document.querySelector("body").background("images/background2.gif");
	// spriteList.push(new NoFace(ctx))
	$('body').css('background-image', 'url(images/background3.gif)');
	$('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');

    tick();

    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
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

function state() {
    $.ajax({
        url : "ajax-state.php",
        type : "POST"
    })
    .done(function (msg) {
    var reponse = JSON.parse(msg);


    // traitement ici…

    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}

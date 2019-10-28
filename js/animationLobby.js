let compteur = 0; // Compteur de ticks
let spriteList = [];



window.addEventListener("load", () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    // Ce fichier JS est le fichier pour la page d’authentification
    canvas = document.querySelector("body").background("images/background2.gif");


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
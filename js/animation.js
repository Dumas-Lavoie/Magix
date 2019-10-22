let compteur = 0; // Compteur de ticks
let spriteList = [];



window.addEventListener("load", () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");



    spriteList.push(new Background(canvas));
    spriteList.push(new SqueletonGard(ctx));
    spriteList.push(new NoFace(ctx));

    spriteList.push(new Oiseaux(ctx));
    spriteList.push(new Oiseaux(ctx));
    // spriteList.push(new TextPanel(ctx));


    tick();
});


const changeState = (state) => {
    for (let i = 0; i < spriteList.length; i++) {
        if (spriteList[i] instanceof Background)
        {
            spriteList[i].changeState(state);
        }
    }
}



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
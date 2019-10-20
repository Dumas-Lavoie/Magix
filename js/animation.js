let compteur = 0; // Compteur de ticks
let spriteList = [];



window.addEventListener("load", () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");


    spriteList.push(new Background(canvas, 1));
    // spriteList.push(new Robot("hack", ctx));
    // spriteList.push(new Robot("slash" , ctx));

    // document.querySelector("canvas").onclick = event => {
    //     spriteList.push(new Bob(ctx));
    // };


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
class Background {
    constructor(canva, nb) {
        this.canva = canva;
        this.context = canva.getContext("2d");
        this.bg = new Image();
        this.posXDepart;
        this.posYDepart;
        if (nb == 1)
        {
            this.bg.src = "images/background1.jpg";
            this.posXDepart = -300;
            this.posYDepart = -200;
        }


    }

    tick() {
        if (this.bg.complete) {
            this.context.drawImage(this.bg, this.canva.width / 2 - this.bg.width / 2, this.canva.height / 3 - this.bg.height / 2 - 100);
        }

        return true;
    }
}
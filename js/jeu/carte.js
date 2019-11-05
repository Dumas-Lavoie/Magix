

let tab


class Carte {
    constructor(nom, img, cout) {
        this.nom = nom;
        this.img = null;
        this.cout = cout;
        this.attaque = 0;
        this.ptsVie = 0;
    }

     setImage(imgSrc) {
        this.img = imgSrc;

    }
}


// Pour la faire fonctionner, je crée une carte avec
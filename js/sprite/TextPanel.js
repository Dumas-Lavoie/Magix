class TextPanel {
    constructor(ctx) {
        this.time = 0;
        this.texte = "";
		this.contexte = ctx;
		this.x = -10;
        this.y = 50 + Math.random() * 300;
 

    }

    tick() {
        
        this.time += 1;
        this.contexte.font = "30px Arial";
        if (this.time % 600 == 0)
        {
            this.vrai = true;
        }


        if (this.vrai)
        {
            this.contexte.fillText("TEST", 10, 50);
        }
        


        
        

        return true;
    }
}
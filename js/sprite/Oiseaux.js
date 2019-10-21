class Oiseaux {
    constructor(ctx) {
		this.time = 0;
		this.contexte = ctx;
		this.x = -10;
        this.y = 50 + Math.random() * 300;
        this.speed = Math.random(3);
        
		let columnCount = 5;
		let rowCount = 2;
		let refreshDelay = 300;
		let loopInColumns = true; // Otherwise, false
		let scale = 1;

		this.tiledImage = new TiledImage("images/birdsSS.png", columnCount, rowCount,
										refreshDelay, loopInColumns, scale);

                                    this.tiledImage.setFlipped(true);

		this.tiledImage.changeRow(Math.round(Math.random()));
    }

    tick() {
        
        this.x += 1 + this.speed;


		this.tiledImage.tick(this.x, this.y, this.contexte);

        return true;
    }
}
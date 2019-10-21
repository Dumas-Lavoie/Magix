class NoFace {
    constructor(ctx) {
		this.time = 0;
		this.contexte = ctx;
		this.x = 300;
		this.y = 650;
		let columnCount = 5;
		let rowCount = 6;
		let refreshDelay = 300;
		let loopInColumns = true; // Otherwise, false
		let scale = 0.5;

		this.tiledImage = new TiledImage("images/noFaceSpriteSheet.png", columnCount, rowCount,
										refreshDelay, loopInColumns, scale);

		this.tiledImage.changeRow(5);
    }

    tick() {

		this.time ++;
		if (this.time % 70 == 0){
			this.x = 400;
			this.time = 0;
		}




		this.tiledImage.tick(this.x, this.y, this.contexte);

        return true;
    }
}
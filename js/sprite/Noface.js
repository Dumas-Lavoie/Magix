class NoFace {
	constructor(ctx) {
		this.time = 0;
		this.contexte = ctx;
		this.x = 700;
		this.y = 650;
		this.opacity = 1;
		let columnCount = 1;
		let rowCount = 1;
		let refreshDelay = 300;
		let loopInColumns = false; // Otherwise, false
		let scale = 0.3;
		this.fade = "fadeOut";

		this.tiledImage = new TiledImage("images/noFaceAlone.png", columnCount, rowCount,
			refreshDelay, loopInColumns, scale);

		this.tiledImage.changeRow(0);
		this.tiledImage.setOpacity(1);
	}

	tick() {


		if (this.fade == "fadeOut")
		{
			this.opacity -= 0.01;
			this.tiledImage.setOpacity(this.opacity);
		}
		else if (this.fade == "fadeIn")
		{
			this.opacity += 0.01;
			this.tiledImage.setOpacity(this.opacity);
		}
		if (this.opacity <= 0)
		{
			this.fade = "fadeIn";
		}
		if (this.opacity >= 1)
		{
			this.fade = "fadeOut";
		}

	

		this.time++;
		if (this.time % 100 == 0) {
			this.x = 300 + Math.random(1) * 600;
			// this.time = 0;
		}




		this.tiledImage.tick(this.x, this.y, this.contexte);

		return true;
	}
}
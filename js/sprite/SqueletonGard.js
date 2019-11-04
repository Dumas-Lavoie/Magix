class SqueletonGard {
    constructor(ctx) {
        this.time = 0;
        this.contexte = ctx;
        this.x = 500;
        this.y = 650;
        this.state = 0;
        this.direction = 'R';
        let columnCount = 13;
        let rowCount = 1;
        let refreshDelay = 100;
        let loopInColumns = true; // Otherwise, false
        let scale = 1;

        this.tiledImage = new TiledImage("images/testSkel.png", columnCount, rowCount,
            refreshDelay, loopInColumns, scale);

        console.log("TEST");
        this.tiledImage.changeRow(0);
    }



    tick() {


        if (this.state == 0) {


            if (this.x < 800 && this.x > 0 && this.direction == 'R') {
                this.x += 1;
            }
            if (this.direction == 'L' && this.x > 0) {
                this.tiledImage.setFlipped(true);
                this.x -= 1;
            }

            if (this.x >= 800) {
                this.direction = 'L';
            }
            if (this.x < 400) {
                this.direction = 'R';
                this.tiledImage.setFlipped(false);
            }
        }

        else if (this.state == 1) {
            if (this.x < 650)
            {
                this.x += 1;
            }
            if (this.x < 651)
            {
                this.x -= 1;
            }
        }


        this.tiledImage.tick(this.x, this.y, this.contexte);

        return true;
    }
}
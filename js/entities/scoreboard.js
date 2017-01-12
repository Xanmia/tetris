$.scoreboard = function () {
    this.lines = 0;

    this.update = function () {
        this.lines++;
    }

    this.reset = function(){
        this.lines = 0;
    }

    this.render = function () {
        $.mainctx.fillStyle = "white";
        $.mainctx.font = "48px serif";
        $.mainctx.fillText(this.lines, 10, 50);
        
    }
}
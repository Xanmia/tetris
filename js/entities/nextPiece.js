$.nextPiece = function () {
    this.type;  

    this.new = function () {
        this.type = new $.line($.utils.pickRandomFromObject($.pieces),15, 0,0);
        this.type.x = 10;
        this.type.y = 100;
    }

    this.render = function () {
        this.type.render();
    }
}
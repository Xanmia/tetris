$.board = function (w,h) {
    this.boardArray = [];
    this.cellSize = 15;
    this.offsetX = 100;
    this.offsetY = 100;
   // this.currentPiece = {x:0,y:0};
    this.score = new $.scoreboard();


    this.init = function () {
        for (var y = 0; y < h;) {
            this.boardArray[y / this.cellSize] = [];
            for (var x = 0; x < w;) {
                this.boardArray[y / this.cellSize][x / this.cellSize] = 0;
                x += this.cellSize;
            }
            y += this.cellSize;
        }
    }

    this.fail = function(){
        this.init();
    }


    this.areCollisions = function (e, _x, _y) {
       // var tmpY = _y+this.cellSize;
       for(y=0;y<e.length;y++){
            for(x=0;x<e[y].length;x++){
                if(e[y][x]){
                    var currY = (_y / this.cellSize)+(y);
                    var currX = (_x / this.cellSize)+(x);
                    if(currY >= this.boardArray.length || currX >= this.boardArray[y].length || currX<0 ||  this.boardArray[currY][currX] ){
                        return true;
                    }
                } 
            }
        }
        return false;
    }

    this.addPiece = function (e,_x, _y) {
    //  if(this.areCollisions(e,_x,_y)){
    //      this.fail();
    //      return;
    //  }
       for(y=0;y<e.length;y++){
            for(x=0;x<e[y].length;x++){
                if(e[y][x]){
                    this.boardArray[(_y / this.cellSize)+(y)][(_x / this.cellSize)+(x)] = 1;
                } 
            }
        }
    }

    this.checkForLines = function(){
        for (var y = 0; y < h;) {
            if(!this.boardArray[y / this.cellSize].includes(0)){//all covered
                var line = this.boardArray[y / this.cellSize];
                this.boardArray.splice(y / this.cellSize,1);
                line.fill(0);
                this.boardArray.splice(0,0,line);
                this.score.update();
            }
            y += this.cellSize;
        }

    }


    this.render = function () {
        this.score.render();
        for (var y = 0; y < h;) {
            for (var x = 0; x < w;) {
                if (this.boardArray[y / this.cellSize][x / this.cellSize]) {
                    $.mainctx.beginPath();
                    $.mainctx.fillStyle = "white";
                    $.mainctx.rect((x)+this.offsetX, (y)+this.offsetY, this.cellSize, this.cellSize);
                    $.mainctx.fill();
                    $.mainctx.lineWidth = 1;
                    $.mainctx.strokeStyle = 'green';
                    $.mainctx.stroke();
                }
                else{
                    $.mainctx.beginPath();
                    $.mainctx.fillStyle = "rgba(0,0,0,.0)";
                    $.mainctx.rect((x+2)+this.offsetX, (y+2)+this.offsetY, this.cellSize-4, this.cellSize-4);
                    $.mainctx.fill();
                    $.mainctx.lineWidth = 1;
                    $.mainctx.strokeStyle = 'gray';
                    $.mainctx.stroke();
                }
                x += this.cellSize;
            }
            y += this.cellSize;
        }
    }

}


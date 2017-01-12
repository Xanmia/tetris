$.test = function () {
    var board = new $.board(200,400);
    board.init();

    var nextPiece = new $.nextPiece();
    nextPiece.new();

    var currentPiece =  new $.line(utils.pickRandomFromObject($.pieces),board.cellSize, board.offsetX, board.offsetY);


    this.update = function () {
        var moveX = 0;

        if($.key.up){
            currentPiece.rotate();
            $.key.up = 0;
        }

        if($.key.left){
            if(!board.areCollisions(currentPiece.obj,currentPiece.x-board.cellSize,currentPiece.y)){
                 currentPiece.x -= board.cellSize;
            }
           $.key.left = 0;
        }
        else if($.key.right){
            if(!board.areCollisions(currentPiece.obj,currentPiece.x+board.cellSize,currentPiece.y)){
                 currentPiece.x += board.cellSize;
            }
            $.key.right = 0;
        }



        if ($.key.down){
            currentPiece.speed = 2;
        }else{
            currentPiece.speed = board.cellSize;
        }

        var updated = currentPiece.update(board);
        if(!updated){
            board.addPiece(currentPiece.obj,currentPiece.x,currentPiece.y);
            currentPiece = new $.line(nextPiece.type.type,board.cellSize, board.offsetX, board.offsetY);
            nextPiece.new();
            //currentPiece =  new $.line(utils.pickRandomFromObject($.pieces),board.cellSize, board.offsetX);   
        }
        board.checkForLines();

      // else if(!utils.contain(currentPiece)){
       //     board.addPiece(currentPiece.obj,currentPiece.x,currentPiece.y+10);
       //     currentPiece =  new $.line(utils.pickRandomFromObject($.pieces));
       // }
      //  else if (board.checkRules(currentPiece.obj,currentPiece.x,currentPiece.y)){
       //     currentPiece =  new $.line(utils.pickRandomFromObject($.pieces));
       // }
        

    }

    this.render = function () {
        nextPiece.render();
        board.render();
        currentPiece.render();
    }
}
$.line = function(e, cellSize, offsetX,offsetY) {
    this.x = 105;//start position
    this.y = 0;//start position
    //  this.w = (e[0].length*10)||40;
    //  this.h = (e.length*10)||10;
    this.rotation = 0;
    this.type = e;
    this.obj = e[this.rotation];

    var ttm = 0;
    this.speed = 10;

    var moveSpeed = cellSize;


    this.update = function(board) {
        var nextY = 0;
        if (ttm > this.speed) {
            ttm = 0;
            if (board.areCollisions(this.obj, this.x, this.y + moveSpeed)) {
                return false;
            }
            this.y += moveSpeed;
        }
        ttm++;

        return true;
    }

    this.rotate = function() {
        if(this.rotation>=e.length-1){this.rotation=-1;}
        this.rotation += 1;
        this.obj = e[this.rotation];
    }

    this.render = function() {
        $.mainctx.beginPath();
        $.mainctx.fillStyle = "white";
        for (y = 0; y < this.obj.length; y++) {
            for (x = 0; x < this.obj[y].length; x++) {
                if (this.obj[y][x]) {
                    $.mainctx.rect(this.x + (x * cellSize) + offsetX, this.y + (y * cellSize) + offsetY, cellSize, cellSize);
                }
            }
        }
        $.mainctx.fill();
        $.mainctx.lineWidth = 1;
        $.mainctx.strokeStyle = 'green';
        $.mainctx.stroke();
    }
}



/*
$.pieces = {
    t: [[0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]],
    L: [[1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]],
    o: [[1, 1],
    [1, 1]],
    s: [[1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]],
    I: [[0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]]
};
*/
$.pieces = {
    t:[
           [[0, 1, 0],
            [1, 1, 1]],
           [[1, 0],
            [1, 1],
            [1, 0]],
           [[1, 1, 1],
            [0, 1, 0]],
           [[0, 1],
            [1, 1],
            [0, 1]]
    ],
    I:   [[[1],
           [1],
           [1],
           [1]],
        [[0,0,0,0],
         [1,1,1,1]]
        ],
    o: [[[1, 1],
        [1, 1]]],
 z:[ [[1, 1, 0],
      [0, 1, 1]],
      [[0, 1],
       [1, 1],
       [1, 0]]
    ],
 s:[ [[0, 1, 1],
      [1, 1, 0]],
     [[1, 0],
      [1, 1],
      [0, 1]]
    ],
  L:[
    [[1, 0],
     [1, 0],
     [1, 1]],
     [[1, 1, 1],
      [1, 0, 0]],
    [[1, 1],
     [0, 1],
     [0, 1]],
     [[0, 0, 1],
      [1, 1, 1]],
  ],
  OL:[
    [[0, 1],
     [0, 1],
     [1, 1]],
     [[1, 0, 0],
      [1, 1, 1]],
    [[1, 1],
     [1, 0],
     [1, 0]],
     [[1, 1, 1],
      [0, 0, 1]],
  ]
}

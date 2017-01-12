var expect = require('chai').expect;
global.$ = {};
global.window = {};
//global.utils = {};
var utils = require('../js/utils.js');
var board = require('../js/entities/board.js');
var score = require('../js/entities/scoreboard.js');
var pieces = require('../js/entities/pieces.js');
var nextpiece = require('../js/entities/nextPiece.js');

describe('Tetris', function () {
    var w = 60, h = 210;
    var _board = new $.board(w,h);
    _board.init();
/*    beforeEach(function(){
        this.w = 200;
        this.h = 400;
        this._board = new $.board(100,100);
    });
*/
    describe('Board', function(){
        describe('initialize board, array correctness', function(){
             it('board should not be undefined', function(){
                expect(_board).to.not.be.undefined;
             });
            it('board should filled and greater then 0', function(){
                expect(_board.boardArray.length).to.be.above(0);
            });
            it('boardArray.length = height\cellSize && boardArray[0].length = width\cellSize', function(){
                expect(_board.boardArray.length).to.equal(h/_board.cellSize);
                expect(_board.boardArray[0].length).to.equal(w/_board.cellSize);
            });

            it('re-intializing board should not fail init due to unequal w,h, cellsizes', function(){
              //  var w = 107, h = 212;
                //var _board = new $.board(106,213);
                _board.cellSize=17;
               // _board.init();
                //expect(_board.boardArray.length).to.equal(0);
                expect(_board.cellSize).to.equal(17);
                expect(function(){_board.init();}).to.not.throw(Error);
                 _board.cellSize=15;
            });
        });


        describe('Add Piece', function(){
            
            it('error due to piece not in bounds',function(){
                expect(function(){_board.addPiece($.pieces.t,500,750);}).to.throw(Error);
               // expect(function(){_board.addPiece($.pieces.I,-500,0);}).to.throw(Error);
                expect(function(){_board.addPiece($.pieces.L,0,-90);}).to.throw(Error);
                //expect(_board.areCollisions($.pieces.t,500,750)).to.equal(true);
            })

            it('piece added, collision verified',function(){
                expect(function(){_board.addPiece($.pieces.t,15,90);}).to.not.throw(Error);
                var collision = _board.areCollisions($.pieces.t,15,90);
                expect(collision).to.equal(true);
            })
        });
        

        describe('Are Collisions', function(){
            var collision = _board.areCollisions($.pieces.t,0,75);
            it('no collision',function(){
                expect(collision).to.equal(false);
            })
            it('collision', function(){
                var collision = _board.areCollisions($.pieces.t,15,90);
                expect(collision).to.equal(true);
            })
            
        });

            
        describe('Check for lines', function(){
            
            it('bottom line should be cleared out, with no score',function(){
                //_board.checkForLines();
                expect(_board.boardArray[_board.boardArray.length-1].includes(0)).to.equal(true);
                expect(_board.score.lines).to.equal(0);
            })

            it('bottom lines should clear out, with 2 score',function(){
                var testBox = new $.line($.pieces['o'], 15, 0,0);
                _board.addPiece(testBox.obj,0,180);
                expect(_board.boardArray[_board.boardArray.length-1]).to.eql([1,1,0,0]);
                expect(_board.boardArray[_board.boardArray.length-2]).to.eql([1,1,0,0]);
                _board.addPiece(testBox.obj,30,180);
                expect(_board.boardArray[_board.boardArray.length-1]).to.eql([1,1,1,1]);
                expect(_board.boardArray[_board.boardArray.length-2]).to.eql([1,1,1,1]);
                _board.checkForLines();
                expect(_board.score.lines).to.equal(2);
                expect(_board.boardArray[_board.boardArray.length-1].includes(0)).to.equal(true);
            })

        });
        

 

        describe('initialize board, failures', function(){
   
            it('board should fail due to a decimal point', function(){
               // var _board = new $.board(106,213);
              //  _board.cellSize=17;
              //  _board.init();
              //  expect(_board.cellSize).to.equal(17);
              //  expect(function(){_board.init();}).to.not.throw(Error);
            });
        });
    });

    describe('Scoreboard', function(){
            it('reset score to 0', function(){
                _board.score.reset();
                expect(_board.score.lines).to.equal(0);
            });
            it('score should go up one point', function(){
                _board.score.update();
                expect(_board.score.lines).to.equal(1);
            });

    });

    describe('Next Piece', function(){
        var _nextPiece = new $.nextPiece();
        describe('new piece', function(){
            _nextPiece.new();
            it('type should not be undefined', function(){
                expect(_nextPiece.type).to.not.be.undefined;
            });
        });
    });
});
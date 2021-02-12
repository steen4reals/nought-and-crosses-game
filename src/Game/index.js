import React from 'react';
import Board from '../Board/index'

    function Game({renderSquare}){
    return (
              <div className="game">
                <div className="game-board">
                  <Board renderSquare={renderSquare}/>
                </div>
                <div className="game-info">
                  <div>{/* status */}</div>
                  <ol>{/* TODO */}</ol>
                </div>
              </div>
            );

}


export default Game;






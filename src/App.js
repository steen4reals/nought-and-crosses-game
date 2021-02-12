import React from 'react';
import "./App.css";
import Square from "./Square/index";
import Board from "./Board/index";
import { useState } from "react";
import Game from './Game/index'

function App() {
  const[playerX,setPlayerX]=useState(true);

  const [ squares, setSquares ] = useState(Array(9).fill(null));


    function renderSquare(i) {
      return <Square
        value={squares[i]}
        onClick={() => {
          if (calculateWinner(squares) || squares[i]) {
              if(playerX ===true){
            alert(`O is winner!`);
              }else{
                alert("X is the winner")
              }
            return ;
          }

          
          const nextSquares = squares.slice();
          nextSquares[i] = playerX ? 'X' :'O';
          setSquares(nextSquares);
          setPlayerX(!playerX);
          // calculateWinner(squares);
        }}
      />;
    }


    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          console.log(squares[a], squares[b], squares[c])
          return squares[a];
        }
      }
      return null;
    }



  return (
    <div className="App">
        <h1>Tic-tac-👣</h1>
        <Game renderSquare={renderSquare} />
      
       
    </div>
  );
}

export default App;


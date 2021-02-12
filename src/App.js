import React from 'react';
import "./App.css";
import Square from "./Square/index";
import Board from "./Board/index";
import { useState } from "react";
import Game from './Game/index'

function App() {
  // const playerArray= ['X','O'];

  const[playerX,setPlayerX]=useState(true);

  // const[squareValue,setSquareValue]=useState("");

  const [ squares, setSquares ] = useState(Array(9).fill(null));
  
  // function setSquareValueFunc(value){
  //   console.log(value,player);
    
  //   value= setSquareValue(player);
  //   console.log(value);
  //   }

    function renderSquare(i) {
      return <Square
        value={squares[i]}
        onClick={() => {
          const nextSquares = squares.slice();
          nextSquares[i] = playerX ? 'X' :'O';
          setSquares(nextSquares);
          setPlayerX(!playerX);
          calculateWinner(squares);
        }}
      />;
    }
/* const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    */


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
          return squares[a];
        }
      }
      return null;
    }









   
  return (
    <div className="App">
        <h1>Tic-tac-toe</h1>
        <Game renderSquare={renderSquare}/>

    </div>
  );
}

export default App;



// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }


// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

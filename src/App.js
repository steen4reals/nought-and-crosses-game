import React from 'react';
import "./App.css";
import Square from "./Square/index";
import Board from "./Board/index";
import { useState } from "react";
import Game from './Game/index'

function App() {
  const playerArray= ['X','O'];

  const[player,setPlayer]=useState("X");
  
  

  function renderSquare(i){
    return <Square value = {i}/>
    };
    
    
  return (
    <div className="App">
        <h1>Tic-tac-toe</h1>
        <Game renderSquare={renderSquare}/>

    </div>
  );
}

export default App;






// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

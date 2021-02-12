import React from 'react';
import "./App.css";
import Square from "./Square/index";
import Board from "./Board/index";
import { useState } from "react";
import Game from './Game/index'

function App() {
  const playerArray= ['X','O'];

  const[player,setPlayer]=useState("X");

  const[squareValue,setSquareValue]=useState("");
  
  function setSquareValueFunc(value){
    console.log(value,player);
    
    value= setSquareValue(player);
    console.log(value);
    }

  function renderSquare(i){

    return <Square value = {i} setSquareValue={setSquareValueFunc}/>
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

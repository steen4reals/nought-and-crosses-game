import React from 'react';


function Square({setSquareValue,value}){
   
          return (
            <button className="square" onClick={()=>setSquareValue(value)}>
            {value}
            </button>
          );
};

export default Square;
    

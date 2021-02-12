import React from 'react';


function Square({value}){
   
          return (
            <button className="square" onClick={()=> alert( `click ${value} `)}>
            {value}
            </button>
          );
};

export default Square;
    

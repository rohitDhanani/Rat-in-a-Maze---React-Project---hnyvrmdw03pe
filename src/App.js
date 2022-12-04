// import { useState } from "react";

import { useEffect, useState } from "react";
import { MazeBlock } from "./components/MazeBlock";
import Results from "./components/Results";

function App() {

  

  // let rows=4;
  // let col=4;
  // let matrix=Array(rows).fill().map(()=>Array(col).fill(0))
  // matrix[1][0]=1;
  // matrix[1][1]=1;
  // matrix[1][2]= Math.floor(Math.random() * 2)
  
  // matrix[2][0]=1;
  // matrix[2][1]=1;
  // matrix[2][2]=1;
  // matrix[2][3]=1;
  let createMaze=()=>{
    let rows=4;
    let col=4;
    let matrix=Array(rows).fill().map(()=>Array(col).fill(0))
    
    let ratRow=Math.floor(Math.random() * 4)
    let ratColumn=Math.floor(Math.random() * 4)
    
    setRatRow(ratRow);
    setRatColumn(ratColumn);
    
    for(let i=0;i<rows;i++){
      for(let j=0;j<rows;j++){
        if(i===ratRow && j===ratColumn || i===3 && j===3){
          continue;
        }
        matrix[i][j]= Math.floor(Math.random() * 2)
      }

    }
    setMatrix(matrix)

  }

  useEffect(()=>{
    createMaze();
  },[])


  const [show,setShow]=useState(false)
  const [matrix,setMatrix]=useState([[]])
  const [ratRow,setRatRow]=useState(0);
  const [ratColumn,setRatColumn]=useState(0);
  // console.log(matrix);
  return (
   <>
    
      <MazeBlock matrix={matrix} ratRow={ratRow} ratColumn={ratColumn}/>
      <div className="centerItem">

        <button className="btn" onClick={()=>{
          setShow(true);
        }}>Show Paths</button>
      <button className="btnRed" onClick={() => window.location.reload(false)}>New Maze</button>
    
      </div>
    
       {show && <Results matrix={matrix} ratRow={ratRow} ratColumn={ratColumn}/>}
    
    
   </>
  );
}

export default App;

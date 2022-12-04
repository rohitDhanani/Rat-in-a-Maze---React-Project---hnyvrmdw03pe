

import { useEffect, useState } from "react";
import { MazeBlock } from "./components/MazeBlock";
import Results from "./components/Results";

function App() {

  let createMaze=()=>{
    let rows=4;
    let col=4;
    let matrix=Array(rows).fill().map(()=>Array(col).fill(0))
    
    let ratRow=Math.floor(Math.random() * 4)
    let ratColumn=Math.floor(Math.random() * 4)

    let cheeseRow=Math.floor(Math.random() * 4)
    let cheeseColumn=Math.floor(Math.random() * 4)

    if(cheeseRow==ratRow && cheeseColumn==ratColumn){
      ratRow=0;
      ratColumn=0;
      cheeseRow=3;
      cheeseColumn=3;
    }



    setRatRow(ratRow);
    setRatColumn(ratColumn);
    setCheeseRow(cheeseRow);
    setCheeseColumn(cheeseColumn);
    
    for(let i=0;i<rows;i++){
      for(let j=0;j<rows;j++){
        if(i===ratRow && j===ratColumn || i===cheeseRow && j===cheeseColumn){
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

  const [cheeseRow,setCheeseRow]=useState(3);
  const [cheeseColumn,setCheeseColumn]=useState(3);
  
  return (
   <>
      <h1 className="centerItem">Rat In A Maze</h1>
      <MazeBlock matrix={matrix} ratRow={ratRow} ratColumn={ratColumn} cheeseRow={cheeseRow} cheeseColumn={cheeseColumn}/>
      <div className="centerItem">

        <button className="btn" onClick={()=>{
          setShow(true);
        }}>Show Paths</button>
      <button className="btnRed" onClick={() => window.location.reload(false)}>New Maze</button>
    
      </div>
    
       {show && <Results matrix={matrix} ratRow={ratRow} ratColumn={ratColumn} cheeseRow={cheeseRow} cheeseColumn={cheeseColumn}/>}
    
    
   </>
  );
}

export default App;

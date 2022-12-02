// import { useState } from "react";

import { MazeBlock } from "./components/MazeBlock";
import Results from "./components/Results";

function App() {

  let rows=4;
  let col=4;
  let matrix=Array(rows).fill().map(()=>Array(col).fill(0))
  matrix[1][0]=1;
  matrix[1][1]=1;
  matrix[1][2]=1;
  
  matrix[2][0]=1;
  matrix[2][1]=1;
  matrix[2][2]=1;
  matrix[2][3]=1;

  // console.log(matrix);
  // const [blocks,setBlocks]=useState({mazeBlock:[[0,0],[0,20],[0,40],[0,60],[0,80]]})
  return (
    <div className='maze-area' >
      <MazeBlock matrix={matrix}/>
      <Results matrix={matrix}/>
     

     
    </div>
  );
}

export default App;

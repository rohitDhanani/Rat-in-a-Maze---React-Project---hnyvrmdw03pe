// import { useState } from "react";

import { useState } from "react";
import { MazeBlock } from "./components/MazeBlock";
import Results from "./components/Results";

function App() {

  let rows=4;
  let col=4;
  let matrix=Array(rows).fill().map(()=>Array(col).fill(0))
  matrix[1][0]=1;
  matrix[1][1]=1;
  // matrix[1][2]= Math.floor(Math.random() * 2)
  
  matrix[2][0]=1;
  matrix[2][1]=1;
  // matrix[2][2]=1;
  // matrix[2][3]=1;



  const [show,setShow]=useState(false)
  // console.log(matrix);
  return (
   <>
    
      <MazeBlock matrix={matrix}/>
      <div className="centerItem">

        <button className="btn" onClick={()=>{
          setShow(true);
        }}>Show Paths</button>
    
      </div>
    
       {show && <Results matrix={matrix}/>}
    
    
   </>
  );
}

export default App;

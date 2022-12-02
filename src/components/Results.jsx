import React from 'react'

const Results = (props) => {
    const createMatrix=()=>{
        let rows=4;
        let col=4;
        let matrix=Array(rows).fill().map(()=>Array(col).fill(0))
        return matrix;
    }
    const calculatePath=()=>{
        let mat=props.matrix;
        let resMat=createMatrix();
        let numberOfPath=[];
        
        checkPath(0,0,mat,resMat,numberOfPath);
        // for(let i=0;i<mat.length;i++){
        //     for(let j=0;j<mat.length;j++){
        //         if(mat[i][j]===0){
                    
        //             checkPath(i,j,mat,resMat)
        //         }
        //     }
        // }
        console.log(resMat);
        console.log(numberOfPath);


    }
    
    

    const checkPath=(i,j,mat,resMat,numberOfPath)=>{
        // check right
        resMat[i][j]=1;
        if(i==3 && j==3){
            numberOfPath.push(resMat);
            return;
        }
        if(j+1<mat.length){
            if(mat[i][j+1]==0){
                checkPath(i,j+1,mat,resMat,numberOfPath)
            }
        }

        // check left

        // if(j-1>=0){
        //     if(mat[i][j-1]==0){
        //         checkPath(i,j-1,mat,resMat)
        //     }
        // }

        // check up

        // if(i-1>=0){
        //     if(mat[i-1][j]==0){
        //         checkPath(i-1,j,mat,resMat)
        //     }
        // }

        // check down
        if(i+1<mat.length){
            if(mat[i+1][j]==0){
                checkPath(i+1,j,mat,resMat,numberOfPath)
            }
        }
        

    }
    calculatePath();
    // console.log(resMat);
    
  return (
    <div>
      
    </div>
  )
}

export default Results

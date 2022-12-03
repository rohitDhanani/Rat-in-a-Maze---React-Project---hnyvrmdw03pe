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
        // console.log(resMat);
        console.log(numberOfPath);


    }
    
    

    const checkPath=(i,j,mat,resMat,numberOfPath)=>{
        resMat[i][j]=1;
        if(i==3 && j==3){
            // console.log(JSON.parse(JSON.stringify(resMat)));
            // JSON.parse(JSON.stringify(resMat))
            numberOfPath.push(JSON.parse(JSON.stringify(resMat)));
            return;
        }
        // check right
        if(j+1<mat.length && resMat[i][j+1]===0){
            if(mat[i][j+1]==0){
                checkPath(i,j+1,mat,resMat,numberOfPath)
                resMat[i][j+1]=0;
            }
        }

        // check left

        if(j-1>=0 && resMat[i][j-1]===0){
            if(mat[i][j-1]==0){
                checkPath(i,j-1,mat,resMat)
                resMat[i][j-1]=0;
            }
        }

        // check up

        if(i-1>=0 && resMat[i-1][j]===0){
            if(mat[i-1][j]==0){
                checkPath(i-1,j,mat,resMat,numberOfPath)
                resMat[i-1][j]=0;
            }
        }

        // check down
        if(i+1<mat.length && resMat[i+1][j]===0){
            if(mat[i+1][j]==0){
                checkPath(i+1,j,mat,resMat,numberOfPath)
                resMat[i+1][j]=0;
            }
        }
        // resMat[i][j]=0;
        

    }
    calculatePath();
    // console.log(resMat);
    
  return (
    <div>
      
    </div>
  )
}

export default Results

import React from 'react'
import rat from './rat.png'
import cheese from "./cheese.png"

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
       
        // console.log(resMat);
        // console.log(numberOfPath);
        return numberOfPath;


    }
    
    

    const checkPath=(i,j,mat,resMat,numberOfPath)=>{
        resMat[i][j]=2;
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
                checkPath(i,j-1,mat,resMat,numberOfPath)
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
        
        

    }
    let paths=calculatePath();
    // console.log(paths);

    const addTwoMat=(mat1,mat2)=>{
        let finalres=createMatrix();
        for(let i=0;i<mat1.length;i++){
            for(let j=0;j<mat1.length;j++){
                finalres[i][j]=mat1[i][j]+mat2[i][j];
            }
        }
        return finalres;
    }
    

    const displayEachPathResult=(paths)=>{
        let blocks=[];
        let mat=addTwoMat(paths,props.matrix);
        
        for(let i=0;i<mat.length;i++){
            for(let j=0;j<mat.length;j++){
                if(mat[i][j]===1){
                    let style={
                        top:i*25+"%",
                        left:j*25+"%"
                    }
                    blocks.push(<div key={`${i}${j}`} className="maze-block" style={style} ></div>)
                }else if(mat[i][j]===2){
                    let style={
                        top:i*25+"%",
                        left:j*25+"%",
                        backgroundColor:"green",
                        border:"2px solid black"
                    }
                    blocks.push(<div key={`${i}${j}`} className="maze-block" style={style} ></div>)
                }else{
                    let style={
                        top:i*25+"%",
                        left:j*25+"%",
                        backgroundColor:"white",
                        border:"2px solid black"
                    }
                    blocks.push(<div key={`${i}${j}`} className="maze-block" style={style} ></div>)
                }
            }
        }
        let stylefirst={
            top:0+'%',
            left:0+'%',
            backgroundColor:"white",
            border:"2px solid black"
        }
        let stylelast={
            top:75+'%',
            left:75+'%',
            backgroundColor:"white",
            border:"2px solid black"
        }
        blocks[0]=<div key={`00`} className="maze-block" style={stylefirst} ><img style={{height:'100%',width:'100%'}} src={rat} alt="" /></div>
        blocks[blocks.length-1]=<div key={`006`} className="maze-block" style={stylelast} ><img style={{height:'100%',width:'100%'}} src={cheese} alt="" /></div>
        return blocks;
    }
    const listOfResult = (paths)=>{
        let lr=[];
        for(let el of paths){
            let res=displayEachPathResult(el);
            lr.push(res);
        }
        return lr;

    }
    
    let displayListOfResults=listOfResult(paths)
    
  return (
    <div >
      {/* {respa} */}
      <p style={{textAlign:"center"}}>Total paths={displayListOfResults.length}</p>
      <div className='resultList'>

            {displayListOfResults.map((el,i)=>{
                return <div key={i} className='result-area'>{el}</div>
                
            })}
      
        </div>
    </div>
  )
}

export default Results

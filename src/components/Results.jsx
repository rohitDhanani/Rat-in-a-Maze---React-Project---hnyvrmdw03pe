import React, { useEffect, useRef } from 'react'
import rat from './rat.png'
import cheese from "./cheese.png"

const Results = (props) => {
    

    const resultRef=useRef();
    useEffect(()=>{
        console.log(resultRef.current);
        resultRef.current.scrollIntoView({behaviour:'smooth'})
    },[])
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
        
        
        checkPath(props.ratRow,props.ratColumn,mat,resMat,numberOfPath,props.cheeseRow,props.cheeseColumn);
       
        
        return numberOfPath;


    }
    
    

    const checkPath=(i,j,mat,resMat,numberOfPath,endRow,endColumn)=>{
        resMat[i][j]=2;
        if(i==endRow && j==endColumn){
            
            numberOfPath.push(JSON.parse(JSON.stringify(resMat)));
            return;
        }
        // check right
        if(j+1<mat.length && resMat[i][j+1]===0){
            if(mat[i][j+1]==0){
                checkPath(i,j+1,mat,resMat,numberOfPath,endRow,endColumn)
                resMat[i][j+1]=0;
            }
        }

        // check left

        if(j-1>=0 && resMat[i][j-1]===0){
            if(mat[i][j-1]==0){
                checkPath(i,j-1,mat,resMat,numberOfPath,endRow,endColumn)
                resMat[i][j-1]=0;
            }
        }

        // check up

        if(i-1>=0 && resMat[i-1][j]===0){
            if(mat[i-1][j]==0){
                checkPath(i-1,j,mat,resMat,numberOfPath,endRow,endColumn)
                resMat[i-1][j]=0;
            }
        }

        // check down
        if(i+1<mat.length && resMat[i+1][j]===0){
            if(mat[i+1][j]==0){
                checkPath(i+1,j,mat,resMat,numberOfPath,endRow,endColumn)
                resMat[i+1][j]=0;
            }
        }
        
        

    }
    let paths=calculatePath();
    

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

                if(i==props.ratRow && j==props.ratColumn){
                    let stylefirst={
                        top:props.ratRow*25+'%',
                        left:props.ratColumn*25+'%',
                        backgroundColor:"yellow",
                        border:"2px solid black"
                    }
                    blocks.push(<div key={`rat`} className="maze-block" style={stylefirst} ><img style={{height:'100%',width:'100%'}} src={rat} alt="" /></div>)
                    continue;
                }

                if(i==props.cheeseRow && j==props.cheeseColumn){
                    let stylelast={
                        top:props.cheeseRow*25+'%',
                        left:props.cheeseColumn*25+'%',
                        backgroundColor:"blue",
                        border:"2px solid black"
                    }
                    blocks.push(<div key={`cheese`} className="maze-block" style={stylelast} ><img style={{height:'100%',width:'100%'}} src={cheese} alt="" /></div>)
                    continue;
                }






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
    <div  >
      
      <p style={{textAlign:"center"}}>Total paths={displayListOfResults.length}</p>
      <div ref={resultRef} className='resultList'>

            {displayListOfResults.map((el,i)=>{
                return <div key={i} className='result-area'>{el}</div>
                
            })}
      
        </div>
    </div>
  )
}

export default Results

import React from 'react'

export const MazeBlock = (props) => {
    let blocks=[];
    let mat=props.matrix;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat.length;j++){
            if(mat[i][j]===1){
                let style={
                    top:i*25+"%",
                    left:j*25+"%"
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
    // console.log(blocks);
  return (
    <>
        {blocks}
    </>
  )
}

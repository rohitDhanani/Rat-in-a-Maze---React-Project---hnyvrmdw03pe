import React from 'react'
import rat from './rat.png'
import cheese from "./cheese.png"

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
    let stylefirst={
        top:0+'%',
        left:0+'%',
        backgroundColor:"yellow",
        border:"2px solid black"
    }
    let stylelast={
        top:75+'%',
        left:75+'%',
        backgroundColor:"blue",
        border:"2px solid black"
    }
    blocks[0]=<div key={`00`} className="maze-block" style={stylefirst} ><img style={{height:'100%',width:'100%'}} src={rat} alt="" /></div>
    blocks[blocks.length-1]=<div key={`006`} className="maze-block" style={stylelast} ><img style={{height:'100%',width:'100%'}} src={cheese} alt="" /></div>
    
    
    // console.log(blocks);
  return (
    <div className='maze-area'>
        {blocks}
    </div>
  )
}

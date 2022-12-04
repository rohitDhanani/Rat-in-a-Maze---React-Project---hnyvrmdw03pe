import React from 'react'
import rat from './rat.png'
import cheese from "./cheese.png"

export const MazeBlock = (props) => {
    
    let blocks=[];
    let mat=props.matrix;
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

  return (
    <div className='maze-area'>
        {blocks}
    </div>
  )
}

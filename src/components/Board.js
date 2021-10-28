import React from 'react';
import Square from './Square'

const Board = ({squares,handleClick}) => {

    return (
        <div className="boardContainer">
            {squares?.map((square,index)=>{
                return(
                    <Square key={index} value={square} handleClick={()=>handleClick(index)} />
                )
            })}
            
        </div>
    )
}

export default Board

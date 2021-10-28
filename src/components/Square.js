import React from 'react'

const Square = ({value,handleClick}) => {
    return (
        <div onClick={handleClick} className={`squareContainer ${value ? "clicked" : null}`}>
            {value} 
        </div>
    )
}

export default Square

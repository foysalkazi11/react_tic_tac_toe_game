import React,{useState,useEffect} from 'react';
import Board from './Board';
import calculateWinner from '../helper/calculateWinner';
import speak from '../helper/speak';

const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [circleIsNext,setCircleIsNext] = useState(true)
    const [showResetButton,setShowResetButton] = useState(false)
    const [darwGame,setDarwGame] = useState(false)
    const [playerStatus,setPlayerStatus] = useState("First player")
    const winner = calculateWinner(board)


    const handleClick = index =>{
        const copyBoard = [...board]
        if (winner || copyBoard[index]) return;

        copyBoard[index] = circleIsNext ? "O" : "X"
        setBoard(copyBoard)
        setCircleIsNext(!circleIsNext)

    }

    const resetBoard = ()=>{
        setBoard(Array(9).fill(null))
        setShowResetButton(false)
        setDarwGame(false)
        setPlayerStatus("First player")
        setCircleIsNext(true)
    }


    useEffect(() => {
        if (winner) {
            setShowResetButton(true)
            speak(`${winner} is winner`)
            
        }else{
            if (!board.includes(null)) {
                setDarwGame(true)
                setShowResetButton(true)
                speak(`Game draw please play again`)
           }
        }
       const status =  board.every(square => square === null)
       if (!status) {
           setPlayerStatus("Next Player")
       }

    }, [board])

    return (
        <div className="gameContainer">
            <div className="gameContainerHeading">
                <p>Play Tic Tac Toe Game</p>
            </div>
            <div className="showResult">
               {darwGame ? "Game draw please play again !" : 
                <p>{winner ? `Winning Player : ${winner}`: `${playerStatus} : ${circleIsNext ? "O" : "X"}`}</p>
               }
            </div>

            <Board squares={board} handleClick={handleClick} />
            {showResetButton ?
            <button className="restartButton" onClick={resetBoard}>Re-start</button>
             :null}
            
        </div>
    )
}

export default Game

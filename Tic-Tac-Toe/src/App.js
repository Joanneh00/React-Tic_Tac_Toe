import {useState} from "react"

function Square({ value , squareClicked }) {
  return <button className="square" onClick={squareClicked}>{ value }</button>;
}

export default function Board(){
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [xIsNext, setxIsNext] = useState(true);
   
   function handleClick(i){
    const nextSquares = squares.slice();
    if(xIsNext){
    nextSquares[i] ="x";}
    else{
      nextSquares[i] = "0";
    }
    setSquares(nextSquares);
    setxIsNext(!xIsNext);

   }

  return(
    <>
    <div className = "board-row">
    <Square value = {squares[0] } squareClicked = {() => handleClick(0)} />
    <Square value = {squares[1] } squareClicked = {() => handleClick(1)} />
    <Square value = {squares[2] } squareClicked = {() => handleClick(2)} />
    </div> 
    <div className = "board-row">
    <Square value = {squares[3]} squareClicked =  {() => handleClick(3)}/>
    <Square value = {squares[4]} squareClicked =  {() => handleClick(4)}/>
    <Square value = {squares[5]} squareClicked =  {() => handleClick(5)}/>
    </div>
    <div className = "board-row">
    <Square value = {squares[6]} squareClicked = {() => handleClick(6)}/>
    <Square value = {squares[7]} squareClicked = {() => handleClick(7)}/>
    <Square value = {squares[8]} squareClicked = {() => handleClick(8)}/>
    </div>
    </>
  );
}

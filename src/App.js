import React, { useState } from 'react';
import './App.css';
import { Board } from "./components/Board";
import { Scorecard } from "./components/Scorecard";
import { Resetbutton } from "./components/Resetbutton";
function App() {
  const winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xplaying,setxplaying] = useState(true);
  const [scores,setscore] = useState({xscore: 0,oscore: 0});
  const [gameover,setgameover] = useState(false);
  const handleBox=(BoxIdx)=>{
    const updatedboard=board.map((value,idx)=>{
      if(idx===BoxIdx){
        return xplaying===true?"X":"O";
      }
      else{
        return value;
      }
    })
    const winner=checkwinner(updatedboard);
    if(winner){
      if(winner==="O"){
        let {oscore}=scores;
        oscore+=1;
        setscore({...scores,oscore});
      }
      else{
        let {xscore}=scores;
        xscore+=1;
        setscore({...scores,xscore});
      }
    }
    setBoard(updatedboard);
    setxplaying(!xplaying);

  }
  const checkwinner=(board)=>{
     for(let i=0;i<winconditions.length;i++){
      const [x,y,z]=winconditions[i];
      if(board[x]&&board[x]===board[y]&&board[y]===board[z]){
        setgameover(true);
        return board[x];
      }
     }
  }
  const resetBoard=()=>{
    setgameover(false);
    setBoard(Array(9).fill(null));
  }
  return (
    <div className="App">
      <Scorecard scores={scores} xplaying={xplaying} />
      <Board board={board} onClick={gameover?resetBoard:handleBox} />
      <Resetbutton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;

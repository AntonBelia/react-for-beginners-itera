import React from "react";
import { HeaderWithCounter } from "./HeaderWithCounter";
import { Battlefield } from "./Battlefield";
import { ResetBtn } from "./ResetBtn";
import { useGameState } from "./state/useGameState";

import './style.css'

function App() {
  const {turn, reset, matrix, fire, won} = useGameState();

  if (won) {
    alert('moscow Down')
  }
  
  return (
    <div className="app" >
      <HeaderWithCounter turn={turn}/>
      <Battlefield matrix={matrix} onFire={fire}/>
      <ResetBtn reset={reset}/>
    </div>
  );
}

export default App;

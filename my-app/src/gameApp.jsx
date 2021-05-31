import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import GameMenu from "./components/GameMenu"
import CreateGame from "./components/CreateGame"

import socket from './socketConfig'
import history from "./history"

function App() {
  const [query, setQuery] = useState("");
  const [gameState, setGameState] = useState({_id: "", isOpen : false, players: [], words : []})

    useEffect(()=> {
      socket.on('updateGame', (game)=> {
        console.log(game);

        setGameState(game); //setting state is async
      });

      return ()=> {
        socket.removeAllListeners();
      }
    }, []);

useEffect(() => {
  if(gameState._id !== "")
  history.push(`/game/${gameState._id}`); //remember can use if statement without brackets
})
  return (
    <Router history = {history}>
    <Switch>

     <Route exact path = "/" component = {GameMenu}/>
     <Route exact path = "/game/create" component = {CreateGame}/>
     </Switch>
     </Router>

  )
}

export default App;

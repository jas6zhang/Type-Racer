import React from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";
import logo from '../assets/car.png';

const GameMenu = props => {
    let history = useHistory()
    return (
      <div className = "text-center background">
      <div className = "hvr-underline-from-left">

      <h1 className = "title"> Welcome to Type Racer!</h1>
        </div>
      <div class="container">
        <div class="row">
          <div class="col">
      <img src = {logo} className = "car-img"></img>
      </div>
        <div class="col btn-container">
<button type="button" onClick = {() => history.push('/game/create')} className ="btn  btn-text btn-primary btn-large">Create Game</button>
<button type="button" onClick = {() => history.push('/game/join')} className ="btn btn-text btn-primary btn-large">Join Game</button>
</div>
</div>
</div>
</div>
    )
}

export default GameMenu;

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const fetch = require('node-fetch');
const socketio = require('socket.io');
const server = app.listen(3001);

const io = socketio(server);
const QuotableAPI  = require('./QuotableApi')
const Game = require('./Models/Game');

mongoose.connect('mongodb://localhost:27017/type-racer',
            {useNewUrlParser: true, useUnifiedTopology: true},
            () => {
    console.log("successfully connected")
  });

io.on('connect', (socket)=> {
  socket.on('create-game', async(nickName) => {
    try {
      const quotableData = await QuotableApi();
     let Game = new Game();

      game.words = quotableData;

      let player = {
        socketID : socket.id, //every socket has own unique id
        isPartyLeader : true, //person is one who creates game
        nickName
      }

      game.players.push(player)

      game = await game.save();

      const gameID = game._id.toString() //gives primary key

      socket.join(gameID); 
      io.to(gameID).emit('updateGame', game);
    } catch(err) {
      console.log(err);
    }
  })
  socket.emit('test', 'this is from the server ')
})
//
//
// fetch('https://api.quotable.io/random')
//     .then(response => response.json())
//     .then(data => {
//       console.log(`${data.content} —${data.author}`)
//     })

//
// console.log(Quotable);
               // import React, {
            // import ReactDOM from "react-dom";
            //
            // function App() {
            //   const [query, setQuery] = useState("");
            //
            //   return (
            //     <div>
            //         <div>
            //         <h1>Welcome to TypeRacer!</h1>
            //
            //             <form>
            //       <label for="name">Username:</label>
            //       <input type="text" name="lname"></input>
            //     </form>
            //
            //
            //     <button type="button" className ="btn btn-primary">Join Game</button>
            //     <button type="button" className ="btn btn-primary">Create Game</button>
            //       </div>
            //         </div>
            //   )
            // }
            //
            // export default App;

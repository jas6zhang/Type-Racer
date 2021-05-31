import React, {
useState
} from 'react';
import socket from "../socketConfig";

const JoinGame = props => {
const [userInput, setuserInput,] = useState({gameID : "", nickName: "");
const onChange = e=> {
  setNickName(e.target.value)
}

const onSubmit = e=> {
  e.preventDefault();
  socket.emit('create-game', nickName);
}

return (
< div className="row">
  < div className="col-sm">
      < div className="col-sm-8">
        < h1 className="text-center"> Create Game < /h1>
            < form onSubmit={ onSubmit }>
              < div className="form-group">

                  < label htmlFor="gameID"> Enter Game ID< /label>
                    <input type = "text" name = "gameID" value = {userInput.gameID} onChange =  {onChange } placeholder = "Enter Game ID"
                    className = "form-control"></input>

                    < label htmlFor="nickName"> Enter Nickname< /label>
                      <input type = "text" name = "nickName" value = {userInput.nickName} onChange =  {onChange } placeholder = "Enter Nickname"
                      className = "form-control"></input>

                  < / div>

                      <button type ="submit" className = "btn btn-primary "> Submit</button>
                      < /form>
                  < /div>
                < div className="col-sm"></div>
                </div>
                    </div>
    )
}

export default JoinGame;

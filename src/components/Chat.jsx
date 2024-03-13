import React from "react";
import Phone from '../img/call-white.svg';
import Add from '../img/add-white.svg';
import More from '../img/more-white.svg';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    return (
        <div className="chat">
          <div className="chatInfo">
            <span>Adriana</span>
            <div className="chatIcons">
              <img src={Phone} alt=""/>
              <img src={Add} alt=""/>
              <img src={More} alt=""/>
            </div>
            </div> 
            <Messages/> 
            <Input/>
        </div>
    )
}

    export default Chat
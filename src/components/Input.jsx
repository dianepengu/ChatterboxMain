import React from "react";
import Img from "../img/camera-brown.svg"
import Attach from "../img/paperclip-brown.svg"

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Write a message" />
            <div className="send">
                <img src={Attach} alt="" />
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
    } 
    export default Input
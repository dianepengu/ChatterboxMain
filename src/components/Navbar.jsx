import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">ChatterBox</span>
            <div className="user">
                <img src="https://i.pinimg.com/564x/83/a8/eb/83a8eb541c95dd022fe3e766451e4e95.jpg" alt="" />
                <span>Adriana</span>
                <button>logout</button>
            </div>
        </div>
        
    )
    }
    export default Navbar
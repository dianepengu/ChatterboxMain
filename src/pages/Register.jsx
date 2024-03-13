
import React from 'react';
import Add from "../img/imgs/camera.png"

const Register = () => {
  return (
    <div className='formContainer'>      
        <div className='formWrapper'>
            <span className='logo'>Chatterbox</span>
            <span className='title'>Sign up</span>
            <form>
                <input type="text" placeholder='username'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}}type="file" id="file"/>
                <label htmlFor="file">
                   <img src={Add} alt=""/>
                   <span>Choose an icon</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Sign in</p>
        </div>
    </div>
  );
};


export default Register;

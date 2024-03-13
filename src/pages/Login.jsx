
import React from 'react';
import Add from "../img/imgs/camera.png"

const Login = () => {
  return (
    <div className='formContainer'>      
        <div className='formWrapper'>
            <span className='logo'>Chatterbox</span>
            <span className='title'>Sign in</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
               
                <button>Sign in</button>
            </form>
            <p>Don't have an account? Sign up</p>
        </div>
    </div>
  );
};


export default Login;

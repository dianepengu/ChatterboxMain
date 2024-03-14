
import React from 'react';



const Login = () => {
  return (
    
    <div className='formContainer'>
            
        <div className='formWrapper'>
            <span className='logo'>Chatterbox</span>
            <span className='title'>Sign in</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
               
                <button>Sign in</button>
            </form>
            <p>Don't have an account? <a href="./register" className="no-change">Sign up</a></p>
        </div>
    </div>
  );
};


export default Login;

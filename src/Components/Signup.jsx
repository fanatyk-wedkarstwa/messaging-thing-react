import React from 'react'
import '../Styles/Signup.css'

function Signup() {
  return (
    <div className='container'>
        <div className="signup">
            <form className="signup-form">
                <h1>Sign Up</h1>
                <div className='form-grid'>
                    <label htmlFor='email'>E-mail</label>
                    <input type="email" placeholder='johndoe@gmail.com' name='email'></input>
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='********' name='password'></input>
                    <button className='signup-btn'>Sign Up</button>
                    <button className='login-btn'>Login</button>   
                </div>
            </form>
        </div>
        <div className="info">
            <h3>Simple messaging thing made by a simpleton</h3><br></br>
            <p>
                Yo so this is a very basic messaging app, prolly 
                quite trash and ineficient so dont judge</p>
        </div>
    </div>
  )
}

export default Signup

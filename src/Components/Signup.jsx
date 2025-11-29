import React from 'react'
import styles from '../Styles/Signup.module.css'

function Signup() {
  return (
    <div className={styles.container}>
        <div className={styles.signup_card}>
            <div className={styles.signup}>
                <form className={styles.signup_form}>
                    <h1>Sign Up</h1>
                    <div className={styles.form_grid}>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' placeholder='johndoe@gmail.com' name='email'></input>
                        <label htmlFor={styles.password}>Password</label>
                        <input type='password' placeholder='********' name='password'></input>
                        <button className={styles.signup_btn}>Sign Up</button>
                        <button className={styles.login_btn}>Login</button>   
                    </div>
                </form>
            </div>
            <div className={styles.info}>
                <h3>Simple messaging thing made by a simpleton</h3><br></br>
                <p>
                    Yo so this is a very basic messaging app, prolly 
                    quite trash and ineficient so dont judge</p>
            </div>
        </div>
    </div>
  )
}

export default Signup

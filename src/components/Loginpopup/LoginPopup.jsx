import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState]=useState('sign-up')
  return (
    <div className="login-popup">
        <form action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState==='sign-up' ? 'Signup' :'Login'}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {
                    currState!=="Login" ? <input type="text" placeholder='your name' />:<></>
                }
                
                <input type="text" placeholder='email' />
                <input type="text" placeholder='password' />
            </div>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>by clicking t and c applies</p>

            </div>
            <button>{currState==='sign-up' ? "Create Account":"Login"}</button>
            {
                currState==='Login' ?
                <p>Create new Account? <span onClick={()=>setCurrState("sign-up")}>click here</span></p>:
                <p>Already jave an coounnt ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup
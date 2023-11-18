import React, { useState } from 'react'
import '../style/signup.css'
import user from '../image/user.png'
import gmail from '../image/email.png'
import lock from '../image/lock.png'
import reenter from '../image/reenter.png'

function Signup() {

const [action,setAction] = useState("Sign up");
const [password, setPassword] = useState("");
const [reenterPassword, setReenterPassword] = useState("");
const [passwordmatch, setPasswordMatch] = useState("true");

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleReenteredPasswordChange = (e) => {
  setReenterPassword(e.target.value);
};

const checkPasswordMatch = () => {
  setPasswordMatch(password === reenterPassword);
};




  return (
    <div className="container">
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>

        <div className='input'>
          <img className="icon" src={user} alt="" />
          <input type='name' placeholder='Username' />
        </div>
         
        {action==="Log in"?<div></div>:<div className='input'>
        <img className="icon" src={gmail} alt='' />
        <input type='Gmail' placeholder='Gmail' />
      </div>}
        

        <div className='input'>
          <img className="icon" src={lock} alt='' />
          <input type='password' placeholder='Password' value={password}
          onChange={handlePasswordChange} />
        </div>

        {action==="Log in"?<div></div>:<div className='input'>
          <img className="icon" src={reenter} alt='' />
          <input type='password' placeholder='Password'  value={reenterPassword}
          onChange={handleReenteredPasswordChange}
          onBlur={checkPasswordMatch} />
          {!passwordmatch && <p className='warn'>Passwords do not match</p>}
        </div>}
        </div>

        {action==="Sign up"?<div></div>:
        <div className='forget-password'>Do not remember? <span>click here!</span></div>}

      <div className='submit-container'>
        <div className={action==="Log in"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
        <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Log in")}}>Log in</div>

      </div>
    </div>
  )
}

export default Signup

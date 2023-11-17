import React, { useState } from 'react'
import '../style/signup.css'
import user from '../image/user.png'
import gmail from '../image/email.png'
import lock from '../image/lock.png'
import reenter from '../image/reenter.png'

function Signup() {

const [action,setAction] = useState("Sign up");
  return (
    <div className="container">
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>

        <div className='input'>
          <img className="icon" src={user} alt="" />
          <input type='' placeholder='Username' />
        </div>
         
        {action==="Log in"?<div></div>:<div className='input'>
        <img className="icon" src={gmail} alt='' />
        <input type='' placeholder='Gmail' />
      </div>}
        

        <div className='input'>
          <img className="icon" src={lock} alt='' />
          <input type='' placeholder='Password' />
        </div>

        {action==="Log in"?<div></div>:<div className='input'>
          <img className="icon" src={reenter} alt='' />
          <input type='' placeholder='Password' />
        </div>}</div>

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

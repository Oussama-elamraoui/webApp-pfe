import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';
import APISerive from '../APIService';
import { useLocation } from 'react-router-dom';

export default function Login( {checkAdmin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [EmailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

    const register = () => {
      if (username.trim().length !== 0 && email.trim().length !== 0 && password.trim().length !== 0) {
        APISerive.addAdmin({ username, email, password})
      }
    }

//  const checkAdmin=()=>{
//     adminList.map(row=>{if(row.email==EmailLogin && row.password==passwordLogin){      
//      dataToParent=true
//     }  else{
//       navigate('/Home'); 
//     }}

//     )
//   }

  return (
    <div className='div'>
      <div className="main" text-align='center'>
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <div>
            <label className="label" htmlFor="chk" aria-hidden="true">Sign up</label>
            <input className='input' type="text" name="txt" placeholder="User name" value={username} required="" onChange={e => setUsername(e.target.value)} />
            <input className='input' type="email" name="email" placeholder="Email" required="" value={email} onChange={e => setEmail(e.target.value)} />
            <input className='input' type="password" name="pswd" placeholder="Password" required="" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="button" onClick={register}>Sign up</button>
          </div>

        </div>
        <div class="login">
          <div>
            <label class="label" htmlFor="chk" aria-hidden="true">Login</label>
            <input class='input' type="email" name="email" placeholder="Email" required="" value={EmailLogin} onChange={e => setEmailLogin(e.target.value)} />
            <input class='input' type="password" name="pswd" placeholder="Password" required="" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)}/>
            <button class="button" onClick={()=>checkAdmin({EmailLogin,passwordLogin})}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
import './NewUsers.css'
import APISerive from '../../APIService'
import React, { useState, useEffect } from 'react'
export default function NewUserPage() {
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [email,setEmail]=useState('');
  const register=()=>{
    console.log('cc')
   if(firstname.trim().length != 0 && lastname.trim().length !=0  && email.trim().length !=0 ){
      APISerive.addMember({firstname,lastname,email})
      alert(lastname+' '+firstname + ' Added successfully ')
      setEmail('');
      setFirstname('');
      setLastname('');  
   }else{
    alert('error')
   }
  }
  return (
    <div class='form'>
        <h3>New member</h3>
        <label for="First name">First name</label>
        <input type="text" placeholder="First name" id="username" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
        <label for="Last name">Last name</label>
        <input type="text" placeholder="Last name" value={lastname} onChange={e=>{setLastname(e.target.value)}} id="username"/>
        <label for="Last name">Email</label>
        <input type="email" placeholder="Email" value={email} onChange={e=>{setEmail(e.target.value)}} id="username"/>
        <button onClick={register}>Save</button> 
       
    </div>

  )
}

import React, {useState, useContext} from 'react';
import { UserContext } from "./context/userContext";

export default function Login(props){
  const[username, setUserName]=useState('');
  const[password, setPassword]=useState('');

  const userContext = useContext(UserContext);

  const handleLoginSubmit = e =>{
    e.preventDefault();
    userContext.login(username,password)
  }
  const handleNameChange = e =>{
    setUserName(e.target.value);
  }
  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }

  return(
    <form onSubmit={handleLoginSubmit}>
    <input onChange={handleNameChange} type="text" name="name" />
    <input onChange={handlePasswordChange} type="password" name="password" />
    <button>Sign In</button>
  </form>
  )

};
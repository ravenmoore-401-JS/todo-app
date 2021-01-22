import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from './nav';
import Loggin from '../login-form';
import { UserContext } from "../context/userContext";


export default function Header () {

  return(
    <Container>

        <h1>Home</h1>
        <Nav />
        <Loggin />
  
    </Container>
      
  )
    
}

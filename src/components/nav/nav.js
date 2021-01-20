import React from 'react';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

import './nav.scss';
import { Container } from 'react-bootstrap';


export default function Nav (props) {

  return (
    <Container variant='primary'>
      <ListGroup horizontal>
        <ListGroup.Item variant="dark" href="/">
          <Link to='/'>
            Home
          </Link> 
        </ListGroup.Item>
        <ListGroup.Item variant="dark" href="/about">
          <Link to='/about'>
            About
          </Link> 
        </ListGroup.Item>
      </ListGroup>
    </Container>
      
    
  );
}

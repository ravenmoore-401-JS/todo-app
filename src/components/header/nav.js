import React from 'react';
import Auth from '../auth/auth'
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

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
          about
        </Link> 
        </ListGroup.Item>
        <Auth role='admin'>
          <ListGroup.Item variant="dark" href="/settings">
          <Link to='/settings'>
            settings
          </Link>
        </ListGroup.Item>
        </Auth>
        
      </ListGroup>
    </Container>
      
    
  );
}

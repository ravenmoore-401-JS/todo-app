import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function TodoList (props) {

  return (
    <ListGroup>
      {console.log(props.list ,'i was an todo')}
      {props.list.map(item => (
        <ListGroup.Item
        className={`complete-${item.complete}`}
        key={item._id}
        action onClick={() => props.handleComplete(item)}
        >
          <span >
            {item.text}
          </span>
          <p>{item.assignee}</p>
          <p>{item.complete}</p>        
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

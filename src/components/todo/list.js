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
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <p>{item.assignee}</p>          
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

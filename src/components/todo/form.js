import React from 'react';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function TodoForm(props){
  const [item, setItem] = useState({})

  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem(item);
  };

  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <Button type='submit'>Add Item</Button>
      </Form>
    </>
  );
}


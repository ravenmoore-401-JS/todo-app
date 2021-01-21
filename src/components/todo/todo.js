import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {useState} from 'react';
import './todo.scss';
import { Container } from 'react-bootstrap';
import useAjaxCalls from '../hooks/ajax';

export default function ToDo (props) {
  const [list, setList,_getTodos, _addItem] = useAjaxCalls();

  // will become update
  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let listed = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(listed);
    }

  }
  console.log({_getTodos})
  return (
    <>
    <Container variant='primary'>
      <h1>Home</h1>
    </Container>
   
      <div>
        <h2>
        There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </div>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />

          <TodoList
            list={list}
            handleComplete={toggleComplete}
            // ADD DELETE
          />
        </div>
      </section>
    </>
  );
}

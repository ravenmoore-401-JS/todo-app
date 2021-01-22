import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjaxCalls from '../hooks/ajax';

export default function ToDo (props) {
  const [list, setList,_getTodos, _addItem,_completeItem] = useAjaxCalls();

  // will become update
  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let listed = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(listed);
    }

  }
  // console.log({_getTodos})
  return (
    <>••••
      <section className="todo">
        <div>
          <TodoForm handleSubmit={_addItem} />
          <TodoList
            list={list}
            handleComplete={_completeItem}
            // ADD DELETE
          />
        </div>
      </section>
    </>
  );
}

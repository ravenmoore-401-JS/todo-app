import React, {useState, useEffect} from 'react';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.development';

function useAjaxCalls(){
  const [list, setList] = useState([]);
  const todoAPI = 'https://ravenmoore-testapi.herokuapp.com/api/v1/todo'
  const _getTodos = () =>{
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
    .then(data => data.json())
    .then(data => setList(data))
    .catch(console.error)
  }
  useEffect(_getTodos, []);
  
  useEffect(() => {
    // console.log(`list is ${list}`);
  }, [list]);

  const _addItem = (item) =>{
    fetch(todoAPI, {
      method: 'post',
      mode:'cors',
      cache: 'no-cache',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(item),
    })
    .then(response => response.json())
    .then(savedItem =>{
       setList([...list,savedItem])
      })
    .catch(console.error)
  }
  const _completeItem = (item) =>{
    const id = item._id;

    if(!item.complete){item.complete = true};
    if(item.complete){item.complete = false}

    fetch(`${todoAPI}/${id}`, {
      method: 'post',
      mode:'cors',
      cache: 'no-cache',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(item),
    })
    .then(response => response.json())
    .then(savedItem =>{
      // console.log(savedItem,'update item')
      let newList = list.map(listItem => listItem._id === item._id ? item :listItem)
       setList(newList)
      })
    .catch(console.error)
  }

  


  return [list, setList,_getTodos, _addItem,_completeItem]
}

export default  useAjaxCalls;
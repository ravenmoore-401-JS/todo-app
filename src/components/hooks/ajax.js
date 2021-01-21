import React, {useState, useEffect} from 'react';

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
    console.log(`list is ${list}`);
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

  


  return [list, setList,_getTodos, _addItem]
}

export default  useAjaxCalls;
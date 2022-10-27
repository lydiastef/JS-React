
import './App.css'
import {useState} from 'react';
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null); //the written stuff in the input field. Nothing is written so it's set to null.
  const [itemList, updateItemList] = useState([]); //The first variable (itemList stores the state), the second to change it
  
  const onChangeHandler = e => {    //save what the user is currently typing. e stands for event which is what the user has typed.
    //console.log('current value', e.target.value); //get the value of what the user has typed.
    setCurrentItem(e.target.value);// stores the latest value typed
  };

  const addItemsToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now}]); //individual items in the array along with new items. Gives updated list.
    setCurrentItem(''); //clears the input field when user submits'
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='Wrapper'> 
          <div className='Input-wrapper'> 
            <input 
            placeholder='Add Item'
            value={currentItem} onChange={onChangeHandler} /> 
            <button onClick={addItemsToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

//input value - what the user types. Allways current item. onChange - every time the user types.
// arrow function =>

export default App;




/*import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //add the todo to the list
    setList ([...list, newTodo]);

    //Clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    //filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/

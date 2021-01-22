import React from 'react';
import ToDo from './components/todo/todo.js';
import Header from "./components/header/header";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './app.scss';
import UserContext  from './components/context/userContext.js';
export default function App () {
  
    return (
      <UserContext>
      <BrowserRouter>
        <Header />
        <ToDo />
      </BrowserRouter>
      </UserContext>
    );
  }

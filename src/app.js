import React from 'react';
import ToDo from './components/todo/todo.js';
import Nav from "./components/nav/nav";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './app.scss';
export default function App () {
  
    return (
      <BrowserRouter>
        <Nav />
        <ToDo />
      </BrowserRouter>
    );
  }

import React, { Component } from 'react';
import Header from './header';
import Login from './login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header /> 
       <Login />
      </div>
    );
  }
}

export default App;

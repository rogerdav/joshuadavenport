import React, { Component } from 'react';
import Header from './header';
import Album from './album';
import Login from './login';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header /> 
       <Logo />
       {/* <Album /> */}
      </div>
    );
  }
}

export default App;

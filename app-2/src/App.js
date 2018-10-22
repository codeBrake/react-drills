import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      array: ['Tony', 'Steve', 'Jack', 'Will']
    }
  }
  
  
  
  render() {
    let array = this.state.array
    return (
      
      <div className="App">
        {array.map(array => <h1>{array}</h1>)}
      </div>
    );
  }
}

export default App;

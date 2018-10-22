import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }
  handleChange(val){
    this.setState({userInput: val})
  }
  
  
  
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      array: ['Tony', 'Will', 'Jack']
    }
  }
 
  filterArray(val){
    this.setState({userInput: val})
  }
  
  
  render() {
    let array = this.state.array.filter((element)=>{
      return element.startsWith(this.state.userInput);
    }).map((arr,i)=>{
      return <h1 key={i}>{arr}</h1>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.filterArray(e.target.value)}></input>
        {array}
      </div>
    );
  }
}

export default App;

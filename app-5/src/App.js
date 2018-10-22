import React, { Component } from 'react';
import './App.css';
import Image from './Image.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Wolf_with_Caribou_Hindquarter.jpg/170px-Wolf_with_Caribou_Hindquarter.jpg"}/>
      </div>
    );
  }
}

export default App;

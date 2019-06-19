import React, {Component} from 'react';
import Board from './Board.js'
import './App.css';

export default class App extends Component {
  // constructor(props){
  //   super(props)
  //     this.state = {
  //       // treasure: Math.floor(Math.random() * 9)
  //     }
  // }
  
  render(){
    return (
      <div className="app">
        <Board />
      </div>
  );
  }
}

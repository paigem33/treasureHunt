import React, {Component} from 'react';

import './App.css';

export default class Squares extends Component {
  // constructor(props){
  //   super(props)
  //     this.state = {
  //       spaces: ['','','','','','','','',''],
  //       hiddenSpaces: ['?','?','?','?','?','?','?','?','?']
  //     }
  // }

  
  render(){
    const{ id, hiddenSpaces, spaces, displayChar} = this.props
    return (
        <td onClick={displayChar} id={id} className="square">{hiddenSpaces[id]}</td>
  );
  }
}

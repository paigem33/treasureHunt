import React, {Component} from 'react';
import Squares from './Squares'
import './App.css';
import tree from './tree.svg'
import chest from './treasure.png'
import question from './question.gif'
import bomb from './Bomb.png'

export default class Board extends Component {
  constructor(props){
    super(props)
      this.state = {
        spaces: ['','','','','','','','',''],
        hiddenSpaces: ['?','?','?','?','?','?','?','?','?'],
        counter: 5
    
      }
  }

  resetGame = () => {
    this.startGame()
    // let newArr = ['','','','','','','','','']
    let hidArr =['?','?','?','?','?','?','?','?','?']
    // this.setState({ spaces: newArr })
    this.setState({counter:5})
    this.setState({hiddenSpaces:hidArr})
  }

  startGame = () => {
    let random = Math.floor(Math.random()*9)
    let index = random
    let bombIndex = Math.floor(Math.random()*9)
    let spaces = ['','','','','','','','','']
    spaces[index] = "treasure"
    while(bombIndex === index){
      bombIndex = Math.floor(Math.random()*9)
    }
    spaces[bombIndex] = "bomb"
    console.log(spaces)
    this.setState({ spaces: spaces })
  }

  displayChar = (e) => {
    console.log("hi")
    let arr = this.state.spaces
    let arrHid=this.state.hiddenSpaces
    let id = e.target.id
    console.log(arr)
    if(arr[id] === "treasure"){
      arrHid[id]=<img src={chest} />
      this.setState({hiddenSpaces:arrHid})
      setTimeout(function(){
        alert('You win! Press restart to start a new game')
    }, 500);
      this.resetGameTimer()
    }else if(arr[id] === "bomb"){
    arrHid[id]=<img src={bomb} />
      this.setState({hiddenSpaces:arrHid})
      setTimeout(function(){
        alert('You lose! Press restart to start a new game')
    }, 500);
    this.resetGameTimer()
    }else{
      let {counter} = this.state
      if(counter > 1){
      counter=counter-1
      arrHid[id]=<img src={tree}/>
      this.setState({counter})
      this.setState({hiddenSpaces:arrHid})
      }else{
        counter=counter-1
        this.setState({counter})
        arrHid[id]=<img src={tree} />
        this.setState({hiddenSpaces:arrHid})
        setTimeout(function(){
        alert('Out of tries!')
        }, 500);
        this.resetGameTimer()
      }
    }
  }
  resetGameTimer = () => {
    let {resetGame}=this
    setTimeout(function(){
        resetGame()
    }, 500);
  }
  componentWillMount(){
    this.resetGame()
  }
  render(){
    const{hiddenSpaces, spaces}=this.state
    return (
      <div className="board">
      <h1>Treasure Hunt</h1>
        <table>
          <tr>
            <Squares id={0} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
            <Squares id={1} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
            <Squares id={2} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
          </tr>
          <tr>
            <Squares id={3} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
            <Squares id={4} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
            <Squares id={5} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
          </tr>
          <tr>
            <Squares id={6} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
            <Squares id={7} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
            <Squares id={8} displayChar={this.displayChar} spaces={spaces} hiddenSpaces={hiddenSpaces}/>
          </tr>
        </table>
        <button onClick={this.resetGame}>Reset</button>
        <h2>Number of tries: {this.state.counter}</h2>
        <h3>Rules:</h3>
        <ul>
          <li>Click the question marks to see if you can find the treasure!</li>
          <li>If you don't find the treasure in five clicks, you lose!</li>
          <li>If you find a bomb, you lose!</li>
        </ul>
      </div>
  );
  }
}

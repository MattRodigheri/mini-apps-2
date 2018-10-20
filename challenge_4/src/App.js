import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
   super();

   this.state = {
     board: [
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0
     ]
   }
   this.reaveal = this.reveal.bind(this);
 }

 reveal(event) {
   console.log(event.target.id)
 }

  render() {
    var randomNums = [];
    while(randomNums.length < 10){
      randomNums.push(Math.floor(Math.random()*100) + 1);
    }
    return this.state.board.map((button, index) => {
      for (var i = 0; i < randomNums.length; i++) {
        if (index === randomNums[i]) {
          return <button key={index} id={'bomb'} onClick={(event) => this.reveal(event)}>b</button>
        }
      }
      return <button key={index} id={index} onClick={(event) => this.reveal(event)}></button>
    })
  }
}

export default App;

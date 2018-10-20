import React, { Component } from 'react';
import './App.css';

import Board from './Board.js'

class App extends Component {
  constructor() {
   super();

   this.state = {
     height: 10,
     width: 10,
     mines: 10,
     // board: [
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,
     //   0,0,0,0,0,0,0,0,0,0,0
     // ]
   }
   // this.reaveal = this.reveal.bind(this);
 }

 // reveal(event) {
 //   event.target.innerHTML = event.target.className;
 // }

  render() {
    return (
      <div className="game">
        <Board height={this.state.height} width={this.state.width} mines={this.state.mines} />
      </div>
    )
  //   var randomNums = [];
  //   while(randomNums.length < 10){
  //     randomNums.push(Math.floor(Math.random()*100) + 1);
  //   }
  //   return this.state.board.map((button, index) => {
  //     if (index === 0) {
  //       return '';
  //     }
  //     if (index % 10 === 0) {
  //       return <span key={index}><button id={index} className='0' onClick={(event) => this.reveal(event)}></button><br /></span>
  //     }
  //     for (var i = 0; i < randomNums.length; i++) {
  //       //determine bombs
  //       if (index === randomNums[i]) {
  //         return <button key={index} id={index} className='bomb' onClick={(event) => this.reveal(event)}>b</button>
  //       }
  //       //near-bombs
  //       if (index + 1 === randomNums[i] || index - 1 === randomNums[i] || index + 10 === randomNums[i] || index - 10 === randomNums[i] || index + 9 === randomNums[i] || index - 9 === randomNums[i] || index + 11 === randomNums[i] || index - 11 === randomNums[i]) {
  //         return <button key={index} id={index} className='1' onClick={(event) => this.reveal(event)}>{this.className}</button>
  //       }
  //     }
  //       return <button key={index} id={index} className='0' onClick={(event) => this.reveal(event)}></button>
  //   })
  // }
  }
}

export default App;

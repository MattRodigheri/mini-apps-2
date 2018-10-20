import React, {Component} from 'react';
import ScoreBoard from './ScoreBoard.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      frame: 1,
      frameHalf: 1,
      firstBowl: 0,
      secondBowl: 0,
      score: 0,
      strikeBonus: 0,
    }

    this.pinSelection = this.pinSelection.bind(this);
  }

  pinSelection(event) {
    var points = Number(event.target.value);

    if (this.state.strikeBonus > 3) {
      console.log('test')
      this.setState({
        strikeBonus: 0
      })
    }
    this.setState({
      frameHalf: this.state.frameHalf + 1,
      score: this.state.score + points,
    })
    if (this.state.frameHalf === 1) {
      if (this.state.strikeBonus === 1) {
        this.setState({
          score: this.state.score + (points * 2),
          strikeBonus: this.state.strikeBonus + 1
        })
      }
      this.setState({
        firstBowl: points
      })
    }
    if (this.state.frameHalf === 2) {
      if (this.state.strikeBonus === 2) {
        this.setState({
          score: this.state.score + (points * 2),
          strikeBonus: this.state.strikeBonus + 1
        })
      }
      this.setState({
        secondBowl: points,
        frame: this.state.frame + 1,
        frameHalf: 1,
      })
    }
    //strike
    if (points === 10 && this.state.frameHalf === 1) {
      this.setState({
        frame: this.state.frame + 1,
        frameHalf: 1,
        strikeBonus: this.state.strikeBonus + 1
      })
    }
    //spare
    if (this.state.firstBowl + points === 10) {
      alert('spare')
    }
  }


  render() {
    return (
      <div>
        <button value='0' onClick={(event) => this.pinSelection(event)}>0</button>
        <button value='1' onClick={(event) => this.pinSelection(event)}>1</button>
        <button value='2' onClick={(event) => this.pinSelection(event)}>2</button>
        <button value='3' onClick={(event) => this.pinSelection(event)}>3</button>
        <button value='4' onClick={(event) => this.pinSelection(event)}>4</button>
        <button value='5' onClick={(event) => this.pinSelection(event)}>5</button>
        <button value='6' onClick={(event) => this.pinSelection(event)}>6</button>
        <button value='7' onClick={(event) => this.pinSelection(event)}>7</button>
        <button value='8' onClick={(event) => this.pinSelection(event)}>8</button>
        <button value='9' onClick={(event) => this.pinSelection(event)}>9</button>
        <button value='10' onClick={(event) => this.pinSelection(event)}>10</button>
        <ScoreBoard score={this.state} />
      </div>
    )
  }
}

export default App;

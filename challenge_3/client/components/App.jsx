import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      frame: 1,
      firstBowl: 0,
      secondBowl: 0,
      score: 0
    }

    this.pinSelection = this.pinSelection.bind(this);
  }

  pinSelection(event) {
    this.setState({
      frame: this.state.frame + 1,
      score: this.state.score + Number(event.target.value)
    })
    if (this.state.frame === 1) {
      this.setState({
        firstBowl: Number(event.target.value)
      })
    }
    if (this.state.frame === 2) {
      this.setState({
        secondBowl: Number(event.target.value),
        frame: 1
      })
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
      </div>
    )
  }
}

export default App;

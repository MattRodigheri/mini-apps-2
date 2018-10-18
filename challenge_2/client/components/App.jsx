import React, {Component} from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      bpiDataKeys: [],
      bpiDataValues: []
    }
  }

  componentDidMount() {
    axios.get('/coinData')
    .then((response) => {
      this.setState({
        bpiDataKeys: Object.keys(response.data.bpi),
        bpiDataValues: Object.values(response.data.bpi)
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    if (this.state.bpiDataKeys.length === 0) {
      return null;
    }
    return (
      <div>
        <ChartComponent data={this.state} />
        <div>Powered by CoinDesk</div>
      </div>
    )
  }
}

export default App;

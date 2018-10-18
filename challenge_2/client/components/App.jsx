import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bpiData: {}
    }
  }

  componentDidMount() {
    axios.get('/coinData')
    .then((response) => {
      console.log(response.data)
      this.setState({
        bpiData: response.data.bpi
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>Powered by CoinDesk</div>
    )
  }
}

export default App;

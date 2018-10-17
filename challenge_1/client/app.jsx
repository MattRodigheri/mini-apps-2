import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/events')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <div>Hello World</div>
      </div>
    )
  }

}

export default App;

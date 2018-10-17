import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ''
    }

    this.searchDB = this.searchDB.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  searchDB() {
    axios.get(`/events?q=${this.state.searchTerm}`)
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
        <input type='text' onChange={this.handleChange}/>
        <input type='submit' onClick={this.searchDB}/>
      </div>
    )
  }

}

export default App;

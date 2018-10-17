import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      results: [],
    }

    this.searchDB = this.searchDB.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  searchDB() {
    axios.get(`/events?q=${this.state.searchTerm}`)
    .then((response) => {
      console.log(response.data)
      this.setState({
        results: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handlePageClick(event) {
    console.log(event.selected)
    axios.get(`/events?q=${this.state.searchTerm}&_page=${event.selected + 1}`)
    .then((response) => {
      // console.log(response.data)
      this.setState({
        results: response.data
      })
      this.state.page++
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <input type='text' onChange={this.handleChange}/>
        <input type='submit' onClick={this.searchDB}/>

        <div>
          {
            this.state.results.map((result, index) => {
              return (
                <div key={index}>
                  <div>{result.date}</div>
                  <div>{result.description}</div>
                  <br/>
                </div>
              )
            })
          }
        </div>

        <ReactPaginate previousLabel={"previous"}
             nextLabel={"next"}
             breakLabel={<a href="">...</a>}
             breakClassName={"break-me"}
             pageCount={this.state.pageCount}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
             onPageChange={this.handlePageClick}
             containerClassName={"pagination"}
             subContainerClassName={"pages pagination"}
             activeClassName={"active"} />
      </div>
    )
  }

}

export default App;

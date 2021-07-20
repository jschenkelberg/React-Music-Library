import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let filteredResults = this.props.songs.filter(
      (songs) =>
        songs.title
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        songs.artist
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        songs.album
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        songs.release_date
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        songs.genre.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    this.props.filterSongs(filteredResults);
  };

  render() {
    return (
      <div className="search-bar-center">
    
        <form className="form-inline" onSubmit={this.handleSubmit}>
        <h2>Search Music</h2>
          <input
            type="text"
            placeholder="Type to search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Filter</button>
        </form>
        
                </div>
      
      
    );
  }
}

export default SearchBar;

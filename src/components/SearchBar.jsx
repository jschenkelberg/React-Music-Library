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
      <div className="text-center">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type to search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <input type="submit" value="Filter Results"></input>
        </form>
        <hr />
      </div>
      
    );
  }
}

export default SearchBar;

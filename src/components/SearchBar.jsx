import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState } from "react";




class SearchBar extends Component {
    constructor(props) {
        super(props);
        this. state = {
            searchTerm: ""
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
        console.log (event.target.value)
      }

    handleSubmit = (event) => {
        event.preventDefault();
        let filteredResults = this.props.songs.filter(songs =>
            songs.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || 
            songs.artist.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            songs.album.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            songs.release_date.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            songs.genre.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            this.props.filterSongs(filteredResults)
    }

    render() { 
       
        
        return (
            
        <div style={{ margin: "0 auto", marginLeft: "40%" }}>
        Search:{" "}
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="Type to search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
            <input type="submit" value="filter"></input>
        </form>
       
        </div>
           
          );
    }
}

export default SearchBar





// class SearchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.setState = {
//             songs: this.state.songs,
//           filteredSongs: this.state.songs, q: ""
//           };

//           this.filteredSongs = this.filteredSongs.bind(this);
//           this.onChange = this.onChange.bind(this);

//     }

// componentWillReceiveProps(nextProps) {
//     this.setState(
//       {
//         songs: nextProps.songs,
//         filteredSongs: nextProps.songs
//       },
//       () => this.filteredSongs()
//     );
//   }
// filteredSongs = (event) => {
//     this.setState({
//         [event.target.name]: event.target.value
//     });
//     console.log (event.target.value)
//   }

// onChange(event) {
//     const q = event.target.value.toLowerCase();
//     this.setState({ q }, () => this.filteredSongs());
//   }

// handleSubmit = (event) => {
//     event.preventDefault();
//     const song = {
        
//     }
// }

// render() {
//     return (
        
//         <form onSubmit={this.handleSubmit}>
//       <div className="container">
//         <div className="col-lg-4"></div>
//         <div className="col-lg-4">
//         <h1>Filter Music</h1>
//           <div className="form-group">
//             <label>Filter Songs</label>
//             <input type="text" className="form-control"
//             onChange={this.handleChange} value={this.state.q} />
//             </div>
//             </div>
//             </div>
//             </form>
//     )
// }     
// }


// function SearchBar() {
//   const songs = [];
//   const [searchText, setSearchText] = useState([]);
//   const [song, setData] = useState(searchText);

//   const excludeColumns = ["id"];

//   const handleChange = (value) => {
//     setSearchText(value);
//     filterData(value);
//   };

//   // filter records by search text
//   const filterData = (value) => {
//     const lowercasedValue = value.toLowerCase().trim();
//     if (lowercasedValue === "") setData(songs);
//     else {
//       const filteredData = songs.filter((song) => {
//         return Object.keys(song).some((key) =>
//           excludeColumns.includes(key)
//             ? false
//             : song[key].toString().toLowerCase().includes(lowercasedValue)
//         );
//       });
//       setData(filteredData);
//       console.log(filteredData);
//       console.log(value);
//     }
//   };

//   return (
//     <div style={{ margin: "0 auto", marginLeft: "40%" }}>
//       Search:{" "}
//       <input
//         type="text"
//         placeholder="Type to search..."
//         value={searchText}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//     </div>
//   );
// }

// export default SearchBar;
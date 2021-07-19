import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import Songs from "./MusicTable";



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
    //         title: this.state.SongTitle,
    //         artist: this.state.SongArtist,
    //         album: this.state.SongAlbum,
    //         release_date: this.state.SongReleaseDate,
    //         genre: this.state.SongGenre
    //     }
    // }

    // render() { 
    //     return (
    //         <React.Fragment>
    //         <form onSubmit={this.handleSubmit}>
    //       <div className="container">
    //         <div className="col-lg-4"></div>
    //         <div className="col-lg-4">
    //         <h1>Filter Music</h1>
    //           <div className="form-group">
    //             <label>Filter Songs</label>
    //             <input type="text" className="form-control"  
    //             onChange={this.handleChange} value={this.state.q} />
              
    //           </div>
    //           <button type="submit"> Submit </button>
    //         </div>
    //         <div className="col-lg-4"></div>
    //       </div>
       
    //     </form>
        
    //         </React.Fragment>
    //       );
    // }

    function SearchBar(){
    const songs = [  
    ]
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(songs);
    
    const excludeColumns = ["id"];

    const handleChange = value => {
        setSearchText(value);
        filterData(value);        
      };
     
      // filter records by search text
      const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(songs);
        else {
          const filteredData = songs.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setData(filteredData);
          console.log(filteredData)
        }
      }
     
      return (
        <div>
          Search: <input
            style={{ marginLeft: 5 }}
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={e => handleChange(e.target.value)}
          />
          <div className="box-container">
           
            <div className="clearboth"></div>
            {data.length === 0 && <span>No records found to display!</span>}
          </div>
        </div>
      );
    }
    



    

 
export default SearchBar;
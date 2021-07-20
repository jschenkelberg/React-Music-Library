import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './SongForm.css';


class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        SongTitle:'',
        SongArtist:'',
        SongAlbum:'',
        SongReleaseDate:'',
        SongGenre:'',
    }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log (event.target.value)
      }


    handleSubmit = (event) => {
        event.preventDefault();
        const song = {         
            title: this.state.SongTitle,
            artist: this.state.SongArtist,
            album: this.state.SongAlbum,
            release_date: this.state.SongReleaseDate,
            genre: this.state.SongGenre
           
        }
        console.log(song)
        this.props.addSong(song);
            this.setState({               
                newSongTitle: this.state.newSongTitle,
                newSongArtist: this.state.newSongArtist,
                newSongAlbum: this.state.newSongAlbum,
                newSongReleaseDate: this.state.newSongReleaseDate,
                newSongGenre: this.state.newSongGenre
            },
            console.log(this)
            );
    }

  
  render() {
    return (
      <React.Fragment>
  <div className="center">
      
          <form className="form-inline" onSubmit={this.handleSubmit}>
          <h2>Add Music</h2>

          <input
            type="text"
            name="SongTitle"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <input
            type="text"
            name="SongArtist"
            placeholder="Artist"
            onChange={this.handleChange}
            value={this.state.artist}
          />

          <input
            type="text"
            name="SongAlbum"
            placeholder="Album"
            onChange={this.handleChange}
            value={this.state.album}
          />

          <input
            type="datetime-local"
            name="SongReleaseDate"
            placeholder="Release Date"
            onChange={this.handleChange}
            value={this.state.release_date}
          />

          <input
            type="text"
            name="SongGenre"
            placeholder="Genre"
            onChange={this.handleChange}
            value={this.state.genre}
          />

          <button type="submit"> Submit </button>
        </form>
</div>

  <hr />
      </React.Fragment>
    );
  }
}

export default SongForm;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        SongId:'',
        SongTitle:'',
        SongArtist:'',
        SongAlbum:'',
        SongReleaseDate:'',
        SongGenre:'',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const song = {
            SongId: this.state.SongId,
            SongTitle: this.state.SongTitle,
            SongArtist: this.state.SongArtist,
            SongAlbum: this.state.SongAlbum,
            SongReleaseDate: this.state.SongReleaseDate,
            SongGenre: this.state.SongGenre
           
        }
        console.log(song)
        this.props.addSong(song);
            this.setState({
                newSongId: this.state.newSongId,
                newSongTitle: this.state.newSongTitle,
                newSongArtist: this.state.newSongArtist,
                newSongAlbum: this.state.newSongAlbum,
                newSongReleaseDate: this.state.newSongReleaseDate,
                newSongGenre: this.state.newSongGenre,
            });
    }


  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Song Title</label>
                <input type="text" className="form-control" name="SongTitle" 
                onChange={this.songTitle} value={this.state.title}></input>
                <label>Artist</label>
                <input type="text" className="form-control" id="artist">
                onChange={this.songArtist} value={this.state.artist}</input>
                <label>Album</label>
                <input type="text" className="form-control" id="album">
                onChange={this.songAlbum} value={this.state.album}</input>
                <label>Release Date</label>
                <input type="datetime-local" className="form-control" id="release_date">
                onChange={this.songReleaseDate} value={this.state.release_date}</input>
                <label for="title">Genre</label>
                <input type="text" className="form-control" id="genre">                
                onChange={this.SongGenre} value={this.state.genre}</input>

              </div>
              <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
       
        </form>
      </React.Fragment>
    );
  }
}

export default SongForm;

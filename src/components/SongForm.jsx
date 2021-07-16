import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="container">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div className="form-group">
                <label for="title">Song Title</label>
                <input type="text" className="form-control" id="title"></input>
                <label for="artist">Artist</label>
                <input type="text" className="form-control" id="artist"></input>
                <label for="Album">Album</label>
                <input type="datetime-local" className="form-control" id="album"></input>
                <label for="Release Date">Release Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="release_date"
                ></input>
                <label for="title">Genre</label>
                <input type="text" className="form-control" id="genre"></input>
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

import React, { Component } from "react";

const Songs = (props) => {
  return (
    <div>
      <center>
        <h1>Music Library</h1>
      </center>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Release Date</th>
            <th scope="col">Genre</th>
            <th scope="col">Likes</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => (
            <tr>
              <td key={song.id}></td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
              <td>{song.likes}</td>
              <button onClick={() => props.delete(song.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Songs;

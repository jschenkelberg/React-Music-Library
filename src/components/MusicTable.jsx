import React, { Component } from 'react';
import Api from './api';
import MusicTable from './MusicTable';

const Songs = ({ songs }) => {
    return (
        <div>
            <center><h1>Music Library</h1></center>
            {songs.map((song) => (
                <div className="table table-striped">
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>{song.likes}</td>
        
        </div>
            ))}
        </div>
    )

};

export default Songs;

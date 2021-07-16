import React, { Component } from 'react';
import Api from './api';
import axios from 'axios';
import Songs from './MusicTable';
import "bootstrap/dist/css/bootstrap.min.css";
import SongForm from './SongForm';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs : [] 
         }
    }
    componentDidMount() {
        this.getAllMusic();
    }

    async getAllMusic(e) {
        let getAllResponse = await axios.get("http://127.0.0.1:8000/music/")
        .then(response => this.setState({
            songs: response.data
        }));  
        
    }
    
    async addSong(e) {
        let addSong = await axios.post("http://127.0.0.1:8000/music/")
        .then(response => this.setState ({
            songs: response.data
        }));
    }

    delete = (id) => {
    
        axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        
        .then(res => {
            console.log(res);
            console.log(res.data);
      
          })
          console.log(this)
          this.setState({})
    }

    render() { 
        return ( 
            <div>
                placeholder
                <SongForm />
                <Songs songs={this.state.songs} delete={this.delete} />
                
            </div>
         );
    }
}
 
export default App;
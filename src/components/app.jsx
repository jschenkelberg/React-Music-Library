import React, { Component } from 'react';
import Api from './api';
import axios from 'axios';
import Songs from './MusicTable';


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

    async getAllMusic() {
        let getAllResponse = await axios.get("http://127.0.0.1:8000/music/")
        .then(response => this.setState({
            songs: response.data
        }));  
        
    }

    render() { 
        return ( 
            <div>
                placeholder
                <Api />
                <Songs songs={this.state.songs} />
            </div>
         );
    }
}
 
export default App;
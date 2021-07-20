import React, { Component } from 'react';
import axios from 'axios';
import Songs from './MusicTable';
import "bootstrap/dist/css/bootstrap.min.css";
import SongForm from './SongForm';
import SearchBar from './SearchBar';
import Header from './Header';





class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs : [],
            filterData: "" 
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
    
    addSong = (song) => {
        console.log (song)
        console.log(this.state.songs)
        axios.post(`http://127.0.0.1:8000/music/`, song)
        this.setState 
            ({
            songs: [...this.state.songs, song],          
        });        
    }

    filterSongs=(arrayOfNewSongs)=>{
        this.setState({
            songs: arrayOfNewSongs
        })
    }

    delete = (id) => {
        axios.delete(`http://127.0.0.1:8000/music/${id}/`)        
        .then(res => {
            console.log(res);
            console.log(res.data);      
          })
          console.log(this)
        this.getAllMusic();
          
    }

    update = (id) => {
        const song = this.props.songs
        axios.put(`http://127.0.0.1:8000/music/${id}/`, song)        
        .then(res => {
            console.log(res);
            console.log(res.data);      
          })
          console.log(this)
          this.setState({})
          this.forceUpdate()
          
    }

    render() { 
        
        return ( 
            <div>
                <Header />
                <SearchBar songs={this.state.songs} filterSongs = {this.filterSongs}/>
                <Songs songs={this.state.songs} delete={this.delete} />                                 
                <SongForm addSong={this.addSong}/>     
              

                
            </div>
         );
    }
}
 
export default App;
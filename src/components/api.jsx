import axios from "axios";
import MusicTable from './MusicTable';
import React, { Component } from 'react';



class Api extends Component {
    state = {}

    componentDidMount() {
        this.getAllMusic();
    }

    async getAllMusic() {
        try{
        let getAllResponse = await axios.get("http://127.0.0.1:8000/music/");
        console.log(getAllResponse.data)
        }
        catch (ex) {
            console.log('Error.');
        }
    }

    



    render() { 
        return ( 
            <div>
                api
            </div>
         );
    }
}
 
export default Api;


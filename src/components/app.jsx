import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from "./musicTable/musicTable";
import NewSong from "./newSong/newSong";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./search/search";

class App extends Component {
    state = {
        songs: [],
        song: {}
    }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get("http://127.0.0.1:8000/music/");
        this.setState({
            songs: response.data,
        })
    }

    async delete(song){
        let response = await axios.delete(`http://127.0.0.1:8000/music/${song}/`);
        console.log(response.data);
        window.location.reload();
    }

    async newSong(song){
        try {
            let response = await axios.post('http://127.0.0.1:8000/music/', song);
            console.log(response.data);
            this.getAllSongs();
        }
        catch (ex) {
            console.log('Error');
        }
    }

    searchMusic = (searched) => {
        this.setState({
            songs: searched
        });
    };


    render() {
        return (
          <div id='main-body'>
            <h1>Music Library</h1>
            <Search searchMusic={this.searchMusic}/>
            <MusicTable songs={this.state.songs} delete={this.delete}/>
            <NewSong newSong={this.newSong.bind(this)}/>
          </div>
        );
    }
}

export default App;
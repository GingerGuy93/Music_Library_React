import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from "./musicTable/musicTable";
import NewSong from "./newSong/newSong";

class App extends Component {
    state = {
        songs: []
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
        window.location.reload();
    }

    async newSong(song){
        let response = await axios.post('http://127.0.0.1:8000/music/', song)
        this.getAllSongs();
        window.location.reload();
    }

    render() {
        return (
          <div id='main-body'>
            <h1>Music Library</h1>
            <MusicTable songs={this.state.songs} delete={this.delete}/>
            <NewSong newSong={this.newSong.bind(this)}/>
          </div>
        );
    }
}

export default App;
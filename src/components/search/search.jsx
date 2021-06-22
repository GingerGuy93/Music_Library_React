import React, { Component } from "react";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
        }
    }

    handleChange = (event) => {
        this.setState({
                filter: event.target.value},
            function(){
                let songs = this.props.songs.filter(song => song.title.includes(this.state.filter) ||
                    song.artist.includes(this.state.filter) ||
                    song.album.includes(this.state.filter)  ||
                    song.release_date.includes(this.state.filter))
                this.props.searchMusic(songs)
            });
    }

    render() {
        return(
            <div className='searchbar'>
                <h2>Search</h2>
                <input type='text' value={this.state.filter} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Search
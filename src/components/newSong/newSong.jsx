import React, { Component } from 'react';

class NewSong extends Component {
    state = {
        song: '',
        artist: '',
        album: '',
        releaseDate: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newSong(this.state);
    };
    render(){
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Song: </label>
                <input type='text' name='song' onChange={this.handleChange} value={this.state.song}/>
                <label>Artist: </label>
                <input type='text' name='artist' onChange={this.handleChange} value={this.state.artist}/>
                <label>Album: </label>
                <input type='text' name='album' onChange={this.handleChange} value={this.state.album}/>
                <label>Release Date: </label>
                <input type='text' name='releaseDate' onChange={this.handleChange} value={this.state.releaseDate}/>
                <button type='submit'>Add Song</button>
            </form>
        );
    }
}
export default NewSong;
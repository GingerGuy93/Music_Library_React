import React from 'react';


export default function MusicTable(props) {

    return (
        <div className="container">
            <h2>My Collection</h2>

            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                </tr>
                </thead>
                <tbody>
                {props.songs.map((song, index) => (
                    <tr data-index={index} key={song.id}>
                        <th scope="row">{song.id}</th>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td><button type="button" class="btn btn-danger" onClick={() => {props.delete(song.id)}}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
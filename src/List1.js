import React from "react";

const albums = [
    { id: 1, title: "Album 1", artist: "John Smith"},
    { id: 2, title: "Album 2", artist: "Jane Doe"},
    { id: 3, title: "Album 3", artist: "Sam Johnson"},
    { id: 4, title: "Album 4", artist: "Alex brown"},
    { id: 5, title: "Album 5", artist: "Sarah Davis"}
];

function AlbumList(){
    return(
        <div>
            <h1>Album List</h1>
            <ul>
                {albums.map((album)=>(
                 <li key={album.id}>
                    <strong>{album.title}</strong>
                    by {album.artist}
                 </li>   
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;
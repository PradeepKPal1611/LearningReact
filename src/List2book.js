import React from "react";

const Obj = [
    { id: 1, title: "Title 1", author: "Himanshu"},
    { id: 2, title: "Title 2", author: "Subhash"},
    { id: 3, title: "Title 3", author: "Pradeep"},
    { id: 4, title: "Title 4", author: "Neha"},
    { id: 5, title: "Title 5", author: "Lata"}
];

function Booklist(){
    return(
        <div>
            <h1>Book</h1>
            <ul>
                {Obj.map((book) =>(
                    <li key={book.id}>
                        <strong>{book.title}</strong>
                        by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Booklist;
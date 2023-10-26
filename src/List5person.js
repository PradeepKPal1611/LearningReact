import React from "react";

const people =[
    { id: 1, name: "Rohit Raj Chauhan", profession: "Mathematican"},
    { id: 2, name: "Satya Prakesh", profession: "Chemist"},
    { id: 3, name: "Pradeep Kumar", profession: "Software Engineer"},
    { id: 4, name: "Deepak Noida", profession: "QA Engineer"}
];

function PeopleList(){
    return(
        <div>
            <h1>People List</h1>
            <ul>{people.map((person)=>(
                <li key={person.id}>
                    <strong>{person.name}</strong>
                </li>
            ))}
                </ul>
        </div>
    )
}
 
export default PeopleList;
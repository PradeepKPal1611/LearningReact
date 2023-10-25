import React from "react";

const cities = [
    { id: 1, name: "Delhi", country: "INDIA"},
    { id: 2, name: "New York", country: "USA"},
    { id: 3, name: "London", country: "UK"},
    { id: 4, name: "Tokyo", country: "Japan"},
    { id: 5, name: "Sydney", country: "Australia"},
    { id: 6, name: "Paris", country: "France"},
    { id: 7, name: "Kathmandu", country: "Nepal"}
];

function CityList(){
    return(
        <div>
            <h1> City List </h1>
            <ul>
                {cities.map((city) => (
                    <li key={city.id}>
                        <strong>{city.name}</strong>
                        by {city.country} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CityList;
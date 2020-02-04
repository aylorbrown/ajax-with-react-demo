import React from 'react';
import './App.css';

// npm import axios
import axios from 'axios';
//grabbed api address and saved in a variable
const API_ENDPOINT = "https://swapi.co/api/people/1/";


export default function App() {
  let name = 'not their real name';
  axios.get(API_ENDPOINT)
      .then(response => {
          console.log(response)
          name = response.data.name;
      })
  return (
    <div className="App">
      <header className="App-header">
        {name}
      </header>
    </div>
  );
}


import React from 'react';
import './App.css';

// npm import axios
import axios from 'axios';
//grabbed api address and saved in a variable
const API_ENDPOINT = "https://swapi.co/api/people/1/";

function urlForId(id) {
  return `https://swapi.co/api/people/${id}/`;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '', 
      currentId: 1
    }
  }

  componentDidMount() {
    // this is the method that React calls after the component has been 
    // attached to the DOM as a real element 
    // this is the first React method where it is safe to call this.setState
    // let name = 'not their real name';
    axios.get(urlForId(this.state.currentId))
        .then(response => {
            console.log(response.data.name)
            // name = response.data.name;
            this.setState({
              name: response.data.name
            })
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
          this.state.name ?
            this.state.name 
            :
            '🙃'
          } 
        </header>
      </div>
    );
  }
}




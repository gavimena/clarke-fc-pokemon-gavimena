import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(json => {
      this.setState({
        pokemons: json
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pokemons</h1>
          <input className="input" type="text" name="search" placeholder="Write a Pokemon's character" />
        </header>
        <main>
          <ul>
            <li> {this.state.pokemons.name} </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import PokemonList from './PokemonList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  // componentDidMount() {
  //   fetch('https://pokeapi.co/api/v2/pokemon/1/')
  //   .then(response => response.json())
  //   .then(json => {
  //     this.setState({
  //       pokemons: json
  //     });
  //    console.log('fetch',this.state.pokemons);
  //   });
  // }

  render() {

    // let types = this.state.pokemons.types;
    // console.log(types);
    // console.log(this.state.pokemons.sprites);


    // <li> {this.state.pokemons.name} </li>
    // <li> {this.state.pokemons.id} </li>
    // <li> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" /></li>
    // <li> {this.state.pokemons.types[0].name} </li>
    return (
      <div className="App">
        <img className="App__background" alt="background" />
        <header>
          <h1>Pokemons</h1>
          <input className="input" type="text" name="search" placeholder="Write a Pokemon's character" />
        </header>
        <main>
          <ul className="pokemons__list">
            <li> Bulbasaur</li>
            <li> 1 </li>
            <li> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon" /></li>
            <li> poison </li>
            <li> grass </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;

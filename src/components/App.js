import React, { Component } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons : [],
      selectedPokemon: {}
    }
   this.requestServer = this.requestServer.bind(this);
   this.getIdFromUrl = this.getIdFromUrl.bind(this);
 }


  getIdFromUrl(url) {
    return url.split("/")[6] || 0;
  }

    componentDidMount() {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
      .then(response => response.json())
      .then(json => {
        let pokemons = json.results.map(pokemon => {
          pokemon["id"] = this.getIdFromUrl(pokemon.url);
          return pokemon;
        })
        this.setState({
          pokemons: pokemons
        });
      });
    }


  requestServer(pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        selectedPokemon: json
      });
    });
  }


  //Get text from imput
	filter(event){
		this.setState({filter: event.target.value})
	}

  render() {
    let pokemons = this.state.pokemons;
		//Condition to filter by letter
		if(this.state.filter){
			pokemons = pokemons.filter( pokemon => pokemon.name.includes(this.state.filter.toLowerCase()))
		}

    return (
      <div className="App">
			<header>
				<h1>Pokemons</h1>
				<input className="input" type="text" name="search" placeholder="Write a Pokemon's character" onChange={this.filter.bind(this)} />
			</header>
			<main>
				<PokemonCard pokemons={pokemons}
                       selectedPokemon={this.state.selectedPokemon}
                       onMoreInfo={this.requestServer}/>
        </main>
      </div>
    );
  }
}

export default App;

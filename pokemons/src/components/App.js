import React, { Component } from 'react';
import './App.css';
import PokemonList from './PokemonList';

class App extends Component {
  constructor(props) {
    super(props);
    //TODO: Remove this when done!
    this.state = {
      pokemons : [{"url":"https://pokeapi.co/api/v2/pokemon/1/","name":"bulbasaur","id":1},{"url":"https://pokeapi.co/api/v2/pokemon/2/","name":"ivysaur","id":2},{"url":"https://pokeapi.co/api/v2/pokemon/3/","name":"venusaur","id":3},{"url":"https://pokeapi.co/api/v2/pokemon/4/","name":"charmander","id":4},{"url":"https://pokeapi.co/api/v2/pokemon/5/","name":"charmeleon","id":5},{"url":"https://pokeapi.co/api/v2/pokemon/6/","name":"charizard","id":6},{"url":"https://pokeapi.co/api/v2/pokemon/7/","name":"squirtle","id":7},{"url":"https://pokeapi.co/api/v2/pokemon/8/","name":"wartortle","id":8},{"url":"https://pokeapi.co/api/v2/pokemon/9/","name":"blastoise","id":9},{"url":"https://pokeapi.co/api/v2/pokemon/10/","name":"caterpie","id":10},{"url":"https://pokeapi.co/api/v2/pokemon/11/","name":"metapod","id":11},{"url":"https://pokeapi.co/api/v2/pokemon/12/","name":"butterfree","id":12},{"url":"https://pokeapi.co/api/v2/pokemon/13/","name":"weedle","id":13},{"url":"https://pokeapi.co/api/v2/pokemon/14/","name":"kakuna","id":14},{"url":"https://pokeapi.co/api/v2/pokemon/15/","name":"beedrill","id":15},{"url":"https://pokeapi.co/api/v2/pokemon/16/","name":"pidgey","id":16},{"url":"https://pokeapi.co/api/v2/pokemon/17/","name":"pidgeotto","id":17},{"url":"https://pokeapi.co/api/v2/pokemon/18/","name":"pidgeot","id":18},{"url":"https://pokeapi.co/api/v2/pokemon/19/","name":"rattata","id":19},{"url":"https://pokeapi.co/api/v2/pokemon/20/","name":"raticate","id":20},{"url":"https://pokeapi.co/api/v2/pokemon/21/","name":"spearow","id":21},{"url":"https://pokeapi.co/api/v2/pokemon/22/","name":"fearow","id":22},{"url":"https://pokeapi.co/api/v2/pokemon/23/","name":"ekans","id":23},{"url":"https://pokeapi.co/api/v2/pokemon/24/","name":"arbok","id":24},{"url":"https://pokeapi.co/api/v2/pokemon/25/","name":"pikachu","id":25}]
    }
    // this.requestServer = this.requestServer.bind(this);
  }

    // componentDidMount() {
    //   fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({
    //       pokemons: json
    //     });
    //   });
    // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   for (let i = 1; i <= 25; i++) {
  //     let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  //     this.requestServer(url);
  //   }
  // }
  //
  // requestServer(url) {
  //   console.log('requestServer', url);
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => {
  //     let updatedPokemons = this.state.pokemons;
  //     updatedPokemons.push(json);
  //     this.setState({
  //       pokemons: updatedPokemons
  //     });
  //    console.log('fetch',this.state.pokemons);
  //   });
  // }


  //Get text from imput
	filter(event){
		this.setState({filter: event.target.value})
	}

  render() {
    let pokemons = this.state.pokemons;
		//Condition to filter by letter
		if(this.state.filter){
			pokemons = pokemons.filter( pokemon => pokemon.name.includes(this.state.filter.toLowerCase()))
      console.log(pokemons);

		}

    return (
      <div className="App">
        <header>
          <h1>Pokemons</h1>
          <input className="input" type="text" name="search" placeholder="Write a Pokemon's character" onChange={this.filter.bind(this)} />
        </header>
        <main>
          <PokemonList pokemons={pokemons} />
        </main>
      </div>
    );
  }
}

export default App;

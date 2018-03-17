import React from 'react';
import PokemonDetails from './PokemonDetails';
import {Link, Route, Switch} from 'react-router-dom';

class PokemonCard extends React.Component {

	render() {
		let pokemons = this.props.pokemons;
		let imageUrlBase =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
		//let selectedPokemon = this.props.selectedPokemon || {id:0};

		return(
			<div className="pokemon__card">
				{pokemons.map(pokemon => {
					return <div key={pokemon.id} className="pokemon__card-front">
						<h3 className="pokemon__name">{pokemon.name} - Id / {pokemon.id} </h3>
						<img className="pokemon__image" src={`${imageUrlBase}${pokemon.id}.png`} alt="pokemon" />
						<Link className="info-btn" to={`/pokemonDetails/${pokemon.name}`}
							onClick={() => {console.log('pokemon:' , pokemon);this.props.onMoreInfo(pokemon.name)}}>More Info</Link>
						{(this.props.selectedPokemon.name === pokemon.name) ?
							<Switch>
								<Route path="/pokemonDetails/:pokemoname"
									component={(props) => {return <PokemonDetails selectedPokemon={this.props.selectedPokemon} {...props} />}} />
							</Switch> : ""}
					</div>
				})}

			</div>
		);
	}
}

export default PokemonCard;

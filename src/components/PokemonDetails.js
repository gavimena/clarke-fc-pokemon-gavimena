import React from 'react';

class PokemonDetails extends React.Component {
	render(){
		let selectedPokemon = this.props.selectedPokemon || {id:0};

		return (
			<div>
				<h3>Details</h3>
				<ul className="pokemon__characters">
					<li>Height: {selectedPokemon.height}</li>
					<li>Weight: {selectedPokemon.weight}</li>
					<li>Abilities:</li>
					{selectedPokemon.abilities.map((ability, idx) => {return <li key={selectedPokemon.id}>{ability.ability.name}</li> })}
					<li>Types:</li>
					{selectedPokemon.types.map((type, idx) => {return <li key={idx}>{type.type.name}</li>
					})}
				</ul>
			</div>
		);
	}
}

export default PokemonDetails;

import React from 'react'

class PokemonList extends React.Component {

  render() {
    let pokemons = this.props.pokemons;
    let imageUrlBase =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

    return(
      <div className="pokemon__card">
        {pokemons.map(pokemon => {
          return <div key={pokemon.id} className="pokemon__card-front">
            <h3 className="pokemon__name">{pokemon.name} - {pokemon.id} </h3>
            <img className="pokemon__image" src={`${imageUrlBase}${pokemon.id}.png`} alt="pokemon" />
            <button className="info-btn">More Info</button>
          </div>
        })}
        <div className="pokemon__container-back">
        </div>
      </div>
    );
  }
}

export default PokemonList;

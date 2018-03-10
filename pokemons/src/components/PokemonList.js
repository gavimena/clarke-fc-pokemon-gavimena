import React from 'react'

class PokemonList extends React.Component {

  render() {
    let pokemons = this.props.pokemons;
    let imageUrlBase =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    //let id = urlImages.charAt(urlImages.length-5)
    return(
      <div>
        {pokemons.map(pokemon => {
          return <div key={pokemon.id} className="pokemon__container-front">
            <h3>{pokemon.name} - {pokemon.id} </h3>
            <img className="pokemon__image" src={`${imageUrlBase}${pokemon.id}.png`} />
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

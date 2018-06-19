import React from 'react';

export default class PokemonList extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSearch}>
          <input placeholder="Pokemon Name..."/>
        </form>
        {
          this.props.pokemon.map( (pokemon, i) =>
            <div key={i}>
              <input
                onChange={this.props.loadPokemonDetails}
                type="radio"
                id={pokemon.name}
                name="pokemon"
                value={pokemon.url}
              />
              <label htmlFor={pokemon.name}>
                {pokemon.name}
              </label>
            </div>
          )
        }
      </React.Fragment>
    );
  }
}


import React from 'react';

export default class PokemonDetail extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pokemonDetail">
        <h2>{this.props.pokemon.name}</h2>
      </div>
    );
  }
};


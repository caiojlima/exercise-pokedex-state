import React from 'react';
import Pokemon from './Pokemon';
import data from './data';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      filter: data,
    }
    this.nextPokemon = this.nextPokemon.bind(this)
  }

  nextPokemon() {  
    this.setState(({ filter, index }, _props) => {
      return (filter.length - 1 === index) ? { index: 0 } : { index: index + 1 }
    })
  }

  setPokemonByType = ( { target: { className }} ) => {
    this.setState((_previousState, _props) => {
      if (className === 'all') {
        return {
          index: 0,
          filter: data,
        }
      }
      return {
        index: 0,
        filter: data.filter(({ type }) => type.toLowerCase() === className),
      }
    });
  }

  render() {
    const { state: { filter, index } } = this;
    return (
      <div className="main-content">
      <Pokemon pokemon={filter[index]} />
      <div className="buttons-container">
        <div className="type-btn-container">
          <button className="all" onClick={ this.setPokemonByType }>All</button>
          <button className="electric" onClick={ this.setPokemonByType }>Eletric</button>
          <button className="fire" onClick={ this.setPokemonByType }>Fire</button>
          <button className="bug" onClick={ this.setPokemonByType }>Bug</button>
          <button className="poison" onClick={ this.setPokemonByType }>Poison</button>
          <button className="psychic" onClick={ this.setPokemonByType }>Psychic</button>
          <button className="normal" onClick={ this.setPokemonByType }>Normal</button>
          <button className="dragon" onClick={ this.setPokemonByType }>Dragon</button>
        </div>
        <button className="next-btn" onClick={ this.nextPokemon } >Próximo Pokemon</button>
      </div>
    </div>
    );
  }
};

export default Pokedex;

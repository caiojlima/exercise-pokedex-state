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
    this.setState(({ filter: { length }, index }) => {
      return (length - 1 === index) ? { index: 0 } : { index: index + 1 }
    })
  }

  setPokemonByType = ( { target: { className }} ) => {
    this.setState(() => {
      return (className === 'all') ? { index: 0, filter: data, } : { index: 0, filter: data.filter(({ type }) => type.toLowerCase() === className), }
    });
  }

  render() {
    const { state: { filter, index }, setPokemonByType, nextPokemon } = this;
    return (
      <div className="main-content">
      <Pokemon pokemon={filter[index]} />
      <div className="buttons-container">
        <div className="type-btn-container">
          <button className="all" onClick={ setPokemonByType }>All</button>
          <button className="electric" onClick={ setPokemonByType }>Electric</button>
          <button className="fire" onClick={ setPokemonByType }>Fire</button>
          <button className="bug" onClick={ setPokemonByType }>Bug</button>
          <button className="poison" onClick={ setPokemonByType }>Poison</button>
          <button className="psychic" onClick={ setPokemonByType }>Psychic</button>
          <button className="normal" onClick={ setPokemonByType }>Normal</button>
          <button className="dragon" onClick={ setPokemonByType }>Dragon</button>
        </div>
        <button className="next-btn" onClick={ nextPokemon } >Próximo Pokemon</button>
      </div>
    </div>
    );
  }
};

export default Pokedex;

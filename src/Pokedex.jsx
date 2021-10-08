import React from 'react';
import Pokemon from './Pokemon';
import data from './data';
import './Pokedex.css';
import Buttons from './Buttons';

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
      <Buttons setPokemonByType={ setPokemonByType } nextPokemon={ nextPokemon } data={ data } />
    </div>
    );
  }
};

export default Pokedex;

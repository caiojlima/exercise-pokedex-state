import React from 'react';
import Pokemon from './Pokemon';
import data from './data';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      fire: false,
      psychic: false,
    }
    this.nextPokemon = this.nextPokemon.bind(this)
  }

  nextPokemon({ target }) {    
    this.setState((previousState, _props) => {
      if (target.className === 'next-btn') {
        if (previousState.fire) {
          if (previousState.index === 6) {
            
            return {
              index: 1,
              fire: true,
            }
          } else {
            return {
              index: 6,
              fire: true,
            }
          }
        }

        if (previousState.psychic) {
          if (previousState.index === 5) {
            
            return {
              index: 4,
              psychic: true,
            }
          } else {
            return {
              index: 5,
              psychic: true,
            }
          }
        }

        if (previousState.index === data.length -1) {
          return {
            index: 0,
          }
        }
        return {
          index: previousState.index + 1,
        }
      }

      if (target.className === 'all') {
        target.parentNode.nextElementSibling.removeAttribute('disabled');
        return {
          index: 0,
          fire:false,
        psychic: false,
        }
      }

      if (target.className === 'eletric') {
        target.parentNode.nextElementSibling.disabled = 'true';
        return {
          index: 0,
        }
      }

      if (target.className === 'fire') {
          target.parentNode.nextElementSibling.removeAttribute('disabled');
        return {
          index: 1,
          fire: true,
        }
      }

      if (target.className === 'bug') {
        target.parentNode.nextElementSibling.disabled = 'true';
        return {
          index: 2,
        }
      }

      if (target.className === 'poison') {
        target.parentNode.nextElementSibling.disabled = 'true';
        return {
          index: 3,
        }
      }

      if (target.className === 'psychic') {
        target.parentNode.nextElementSibling.removeAttribute('disabled');
      return {
        index: 4,
        fire:false,
        psychic: true,
      }
    }

    if (target.className === 'normal') {
      target.parentNode.nextElementSibling.disabled = 'true';
      return {
        index: 7,
      }
    }

    if (target.className === 'dragon') {
      target.parentNode.nextElementSibling.disabled = 'true';
      return {
        index: 8,
      }
    }

    })
  }

  render() {
    return (
      <div className="main-content">
      <Pokemon pokemon={data[this.state.index]}  />
      <div className="buttons-container">
        <div className="type-btn-container">
          <button className="all" onClick={ this.nextPokemon }>All</button>
          <button className="eletric" onClick={ this.nextPokemon }>Eletric</button>
          <button className="fire" onClick={ this.nextPokemon }>Fire</button>
          <button className="bug" onClick={ this.nextPokemon }>Bug</button>
          <button className="poison" onClick={ this.nextPokemon }>Poison</button>
          <button className="psychic" onClick={ this.nextPokemon }>Psychic</button>
          <button className="normal" onClick={ this.nextPokemon }>Normal</button>
          <button className="dragon" onClick={ this.nextPokemon }>Dragon</button>
        </div>
        <button className="next-btn" onClick={ this.nextPokemon } >Próximo Pokemon</button>
      </div>
    </div>
    );
  }
};

export default Pokedex;

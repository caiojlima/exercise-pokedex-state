import React from "react";
import './Buttons.css';

class Buttons extends React.Component {
  render() {
    const { setPokemonByType, nextPokemon, data } = this.props;
    const uniqueTypes = [...new Set(data.map(({ type }) => type))]
    uniqueTypes.unshift('All');
    return (
      <div className="buttons-container">
        <div className="type-btn-container">
          {uniqueTypes.map((type) => <button className={ type.toLowerCase() } onClick={ setPokemonByType } >{type}</button>)}
        </div>
        <button  className="next-btn" onClick={ nextPokemon } >Próximo Pokemon</button>
      </div>
    )
  }
  
}

export default Buttons;
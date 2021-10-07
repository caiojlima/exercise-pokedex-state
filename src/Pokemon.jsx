import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render(){
    const { pokemon: { name, type, image, averageWeight: { value, measurementUnit } } } = this.props;
    return (
    <div className="card">
      <div className="info">
        <h4>{name}</h4>
        <h4>{type}</h4>
        <h4>Average Weight: {value}{measurementUnit}</h4>
      </div>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
    </div>
    )
  }
}

export default Pokemon;
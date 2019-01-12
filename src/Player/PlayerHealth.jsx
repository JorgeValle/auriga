import React from 'react';

// Components should represent one piece of data model
class HitPoints extends React.Component {
  render() {

    const pieces = this.props.character.stats.pieces;

    return (
      <div className="hit-points">
        <span>Pieces</span>
        <meter min="0"  value={pieces.current} max={pieces.max}></meter>
        <span>{pieces.current} / {pieces.max}</span>
      </div>
    );
  }
}

export default HitPoints;
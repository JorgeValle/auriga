import React from 'react';

import King from '../Pieces/King';
import Queen from '../Pieces/Queen';
import Bishop from '../Pieces/Bishop';
import Rook from '../Pieces/Rook';
import Pawn from '../Pieces/Pawn';

// Components should represent one piece of data model
class PlayerHealth extends React.Component {
  render() {

    const player = this.props.player;

    return (
      <div className="player-health">
        <span>Pieces</span>
        <meter min="0"  value="13" max="16"></meter>
        <span>13 / 16</span>
  
        <div className="player-barracks">
          <King />
          <Queen />
          <Bishop />
          <Rook />
          <Pawn />
        </div>

      </div>
    );
  }
}

export default PlayerHealth;
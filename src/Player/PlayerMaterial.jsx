import React from 'react';

import King from '../Pieces/King';
import Queen from '../Pieces/Queen';
import Bishop from '../Pieces/Bishop';
import Rook from '../Pieces/Rook';
import Knight from '../Pieces/Knight';
import Pawn from '../Pieces/Pawn';

// Components should represent one piece of data model
class PlayerMaterial extends React.Component {
  render() {

    const player = this.props.player;

    return (
      <div className="player-material">
        <h3>Material</h3>
        <meter min="0"  value="13" max="16"></meter>
        <span>13 / 16</span>
        <div className="piece-count">
          <span>
          1 x <King />
          </span>
          <span>
          1 x <Queen />
          </span>
          <span>
          2 x <Rook />
          </span>
          <span>
          1 x <Bishop />
          </span>
          <span>
          1 x <Knight />
          </span>
          <span>
          6 x <Pawn />
          </span>
        </div>
      </div>
    );
  }
}

export default PlayerMaterial;
import React from 'react';

// Components should represent one piece of data model
class PlayerColor extends React.Component {
  render() {

    const player = this.props.player;

    return (
      <div className="player-color">
        <span className={player.color}>{player.color}</span>
      </div>
    );
  }
}

export default PlayerColor;
import React from 'react';

// Components should represent one piece of data model
class PlayerStatus extends React.Component {
  render() {

    const player = this.props.player;

    return (
      <div className="player-status">
        <h2>{player.status}</h2>
        <input type="text" value={player.status} />
      </div>

    );
  }
}

export default PlayerStatus;
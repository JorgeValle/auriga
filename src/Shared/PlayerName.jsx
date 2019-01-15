import React from 'react';

// Components should represent one piece of data model
class PlayerName extends React.Component {
  render() {

    const player = this.props.player;

    return (
      <h1 className="player-name">{player.name}</h1>
    );
  }
}

export default PlayerName;
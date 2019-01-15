import React from 'react';

// Components should represent one piece of data model
class PlayerImage extends React.Component {
  render() {

    const player = this.props.player;

    return (
      <img className="player-image" src={player.image} alt={player.status} title={player.status} />
    );
  }
}

export default PlayerImage;
import React from 'react';

// Player
import PlayerImage from './Shared/PlayerImage';
import PlayerName from './Shared/PlayerName';
import PlayerStatus from './PlayerStatus';
import PlayerHealth from './PlayerHealth';

// Components should represent one piece of data model
class Player extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <section className="player">
        <PlayerImage player={this.props.player} />
        <PlayerName player={this.props.player} />
        <PlayerStatus player={this.props.player} />
        <PlayerHealth player={this.props.player} />
      </section>
    );
  }
}

export default Player;
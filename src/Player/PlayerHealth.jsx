import React from 'react';

// Components should represent one piece of data model
class PlayerHealth extends React.Component {
  render() {

    const player = this.props.player;

    return (
      <div className="player-health">
        <span>Pieces</span>
        <meter min="0"  value="13" max="16"></meter>
        <span>13 / 16</span>
      </div>
    );
  }
}

export default PlayerHealth;
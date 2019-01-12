import React from 'react';

// Components should represent one piece of data model
class HitPoints extends React.Component {
  render() {

    const hp = this.props.character.stats.hp;

    return (
      <div className="hit-points">
        <span>HP</span>
        <meter min="0"  value={hp.current} max={hp.max}></meter>
        <span>{hp.current} / {hp.max}</span>
      </div>
    );
  }
}

export default HitPoints;
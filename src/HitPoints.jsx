import React from 'react';

// Components should represent one piece of data model
class HitPoints extends React.Component {
  render() {

    const hp = this.props.character.hp;

    return (
      <div className="hit-points">
        <span>HP</span>
        <meter value={hp} min="0" max="10" low="2" high="8" optimum="10"></meter>
      </div>
    );
  }
}

export default HitPoints;
import React from 'react';

// Components should represent one piece of data model
class MagicPoints extends React.Component {
  render() {

    console.log(this.props);

    const mp = this.props.character.stats.mp;

    return (
      <div className="magic-points">
        <span>MP</span>
        <meter min="0" max={mp.max} value={mp.current}></meter>
      </div>
    );
  }
}

export default MagicPoints;
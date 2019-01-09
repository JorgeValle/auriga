import React from 'react';

// Components should represent one piece of data model
class MagicPoints extends React.Component {
  render() {

    console.log(this.props);

    const mp = this.props.character.mp;

    return (
      <div className="magic-points">
        <span>MP</span>
        <meter value={mp} min="0" max="10" low="2" high="8" optimum="10"></meter>
      </div>
    );
  }
}

export default MagicPoints;
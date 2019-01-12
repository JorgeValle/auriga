import React from 'react';

// Components should represent one piece of data model
class CharacterLevel extends React.Component {
  render() {

    const character = this.props.character;

    return (
      <h3>Level: <small>{character.stats.xp.level}</small></h3>
    );
  }
}

export default CharacterLevel;
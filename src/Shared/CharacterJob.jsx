import React from 'react';

// Components should represent one piece of data model
class CharacterJob extends React.Component {
  render() {

    const character = this.props.character;

    return (
      <h2 className="character-job">{character.job}</h2>
    );
  }
}

export default CharacterJob;
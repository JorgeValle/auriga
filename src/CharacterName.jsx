import React from 'react';

// Components should represent one piece of data model
class CharacterName extends React.Component {
  render() {

    const character = this.props.character;

    return (
      <h1 className="character-name">{character.name}</h1>
    );
  }
}

export default CharacterName;
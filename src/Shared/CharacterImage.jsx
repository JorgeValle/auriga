import React from 'react';

// Components should represent one piece of data model
class CharacterImage extends React.Component {
  render() {

    const character = this.props.character;

    return (
      <img className="character-image" src={character.image} alt={character.description} title={character.description} />
    );
  }
}

export default CharacterImage;
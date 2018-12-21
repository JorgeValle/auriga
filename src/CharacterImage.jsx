import React from 'react';

// Components should represent one piece of data model
class CharacterImage extends React.Component {
  render() {

    console.log(this.props);

    const character = this.props.character[0];

    return (
      <img src={character.image} alt={character.description} title={character.description} />
    );
  }
}

export default CharacterImage;
import React from 'react';

// Components should represent one piece of data model
class PartyImages extends React.Component {
  render() {

    console.log(this.props);

    const party = this.props.party;

    return (
      <img src={character.image} alt={character.description} title={character.description} />
    );
  }
}

export default CharacterImage;
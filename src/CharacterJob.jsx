import React from 'react';

// Components should represent one piece of data model
class CharacterJob extends React.Component {
  render() {

    console.log(this.props);

    const character = this.props.character;

    return (
      <h2>{character.job}</h2>
    );
  }
}

export default CharacterJob;
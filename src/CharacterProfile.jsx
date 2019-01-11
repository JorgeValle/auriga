import React from 'react';
import CharacterImage from './CharacterImage';
import CharacterName from './CharacterName';
import CharacterJob from './CharacterJob';
import CharacterLevel from './CharacterLevel';
import ExperiencePoints from './ExperiencePoints';
import HitPoints from './HitPoints';
import MagicPoints from './MagicPoints';

// Components should represent one piece of data model
class CharacterProfile extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <section className="character-profile">
        <CharacterImage character={this.props.character} />
        <CharacterName character={this.props.character} />
        <CharacterJob character={this.props.character} />
        {/* <CharacterLevel character={this.props.character} /> */}
        <ExperiencePoints character={this.props.character} />
        <HitPoints character={this.props.character} />
        <MagicPoints character={this.props.character} />
      </section>
    );
  }
}

export default CharacterProfile;
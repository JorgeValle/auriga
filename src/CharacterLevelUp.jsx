import React from 'react';
import CharacterImage from './CharacterImage';
import CharacterName from './CharacterName';
import CharacterJob from './CharacterJob';
import ExperiencePoints from './ExperiencePoints';
import HitPoints from './HitPoints';
import MagicPoints from './MagicPoints';

// Components should represent one piece of data model
class CharacterProfile extends React.Component {
  render() {
    return (
      <div>
        <CharacterImage character={this.props.character} />
        <CharacterName character={this.props.character} />
        <CharacterJob character={this.props.character} />
        <ExperiencePoints character={this.props.character} />
        <HitPoints character={this.props.character} />
        <MagicPoints character={this.props.character} />
      </div>
    );
  }
}

export default CharacterProfile;
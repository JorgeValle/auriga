import React from 'react';
import CharacterImage from './CharacterImage';
import CharacterName from './CharacterName';
import CharacterJob from './CharacterJob';
import CharacterLevel from './CharacterLevel';
import ExperiencePoints from './ExperiencePoints';
import HitPoints from './HitPoints';
import MagicPoints from './MagicPoints';

// Components should represent one piece of data model
class CharacterLevelUp extends React.Component {
  render() {
    return (
      <div>
        <button>Rotate Character</button>
        <button>Increase Intelligence</button>
        <button>Decrease Intelligence</button>
        <button>Increase Level</button>
        <button>Decrease Level</button>
        <section className="character-level-up">
          <CharacterImage character={this.props.character} />
          <CharacterName character={this.props.character} />
          <CharacterJob character={this.props.character} />
          <CharacterLevel character={this.props.character} />
          <ExperiencePoints character={this.props.character} />
          <HitPoints character={this.props.character} />
          <MagicPoints character={this.props.character} />
        </section>
      </div>


      
    );
  }
}

export default CharacterLevelUp;
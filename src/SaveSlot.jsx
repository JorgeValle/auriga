import React from 'react';
import ChapterNumber from './ChapterNumber';
import ChapterName from './ChapterName';
import TotalPlayTime from './TotalPlayTime';
import PartyImages from './PartyImages';
import CharacterImage from './CharacterImage';
import CharacterLevel from './CharacterLevel';

// Components should represent one piece of data model
class SaveSlot extends React.Component {
  render() {
    return (

      <div>

        <button>Rotate Party</button>
        <button>Rotate Chapter</button>
        <button>Change Character Level</button>
        <button>Overwrite</button>
        <button>Cancel</button>

        <section className="save-slot">
          <CharacterImage character={this.props.character} />
          <PartyImages party={this.props.party} />
          <h1>
            <ChapterNumber chapter={this.props.chapter} />
            &nbsp;
            <ChapterName chapter={this.props.chapter} />
          </h1>
          <CharacterLevel character={this.props.character} />
          <TotalPlayTime time={this.props.time} />
        </section>
      </div>


    );
  }
}

export default SaveSlot;
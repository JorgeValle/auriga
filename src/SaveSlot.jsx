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
    );
  }
}

export default SaveSlot;
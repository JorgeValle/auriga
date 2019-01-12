import React from 'react';
import ChapterNumber from './ChapterNumber';
import ChapterName from '../PlayerProfile/PlayerName';
import ChapterDescription from '../SaveSlot/ChapterDescription';
import TotalPlayTime from '../SaveSlot/TotalPlayTime';
import PartyImages from '../Shared/PartyImages';
import CharacterImage from '../Shared/PlayerImage';
import CharacterLevel from '../Shared/CharacterLevel';
import SaveButtons from '../SaveSlot/SaveButtons';

// Components should represent one piece of data model
class SaveSlot extends React.Component {
  render() {
    return (
      <section className="save-slot">
        <CharacterImage character={this.props.character} />
        <PartyImages party={this.props.party} />
        <h1 className="chapter">
          <ChapterNumber chapter={this.props.chapter} />
          &nbsp;
          <ChapterName chapter={this.props.chapter} />
          <ChapterDescription chapter={this.props.chapter} />
        </h1>
        <TotalPlayTime time={this.props.time} />
        <CharacterLevel character={this.props.character} />
        <SaveButtons />
      </section>
    );
  }
}

export default SaveSlot;
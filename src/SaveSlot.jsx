import React from 'react';
import ChapterNumber from './ChapterNumber';
import ChapterName from './ChapterName';
import TotalPlayTime from './TotalPlayTime';
import PartyImages from './PartyImages';
import CharacterImage from './CharacterImage';
import CharacterLevel from './CharacterLevel';
import SaveButtons from './SaveButtons';

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
        </h1>
        <TotalPlayTime time={this.props.time} />
        <CharacterLevel character={this.props.character} />
        <SaveButtons />
      </section>
    );
  }
}

export default SaveSlot;
import React from 'react';
import FileNumber from './FileNumber';
import PlayerName from '../Shared/PlayerName';
import SaveDate from './SaveDate';
import TotalPlayTime from '../SaveSlot/TotalPlayTime';
import SaveButtons from '../SaveSlot/SaveButtons';

// Components should represent one piece of data model
class SaveSlot extends React.Component {
  render() {
    return (
      <section className="save-slot">
        {/* <FileNumber /> */}
        <PlayerName player={this.props.player} />
        <SaveDate />
        <TotalPlayTime time={this.props.time} />
        <SaveButtons />
      </section>
    );
  }
}

export default SaveSlot;
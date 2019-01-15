import React from 'react';
import PlayerImage from '../Shared/PlayerImage';
import PlayerName from '../Shared/PlayerName';
import TotalPlayTime from '../SaveSlot/TotalPlayTime';
import SaveButtons from '../SaveSlot/SaveButtons';

// Components should represent one piece of data model
class SaveSlot extends React.Component {
  render() {
    return (
      <section className="save-slot">
        <PlayerImage player={this.props.player} />
        <PlayerName player={this.props.player} />
        <TotalPlayTime time={this.props.time} />
        <SaveButtons />
      </section>
    );
  }
}

export default SaveSlot;
import React from 'react';
import DialogueContent from './DialogueContent';
import CharacterImage from './CharacterImage';
import CharacterName from './CharacterName';

// Components should represent one piece of data model
class DialogueBox extends React.Component {
  render() {
    return (
      <div className="dialogue-box">
        <CharacterImage character={this.props.character} />
        <CharacterName character={this.props.character} />
        <DialogueContent dialogue={this.props.dialogue} />
      </div>
    );
  }
}

export default DialogueBox;
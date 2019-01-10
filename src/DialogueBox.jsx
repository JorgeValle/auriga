import React from 'react';
import DialogueContent from './DialogueContent';
import CharacterImage from './CharacterImage';
import CharacterName from './CharacterName';

// Components should represent one piece of data model
class DialogueBox extends React.Component {

  // DialogueBox component owns page number state
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    };
  }

  render() {
    return (
      <section className="dialogue-box">
        <CharacterImage character={this.props.character} />
        <CharacterName character={this.props.character} />
        <DialogueContent dialogue={this.props.dialogue} pageNum={this.state.pageNum} />
      </section>
    );
  }
}

export default DialogueBox;
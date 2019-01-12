import React from 'react';
import DialogueContent from './DialogueContent';
import CharacterImage from '../Shared/PlayerImage';
import CharacterName from '../PlayerProfile/PlayerName';

// Components should represent one piece of data model
class DialogueBox extends React.Component {

  // DialogueBox component owns page number state
  // Components should only update their own state
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    };
    this.handlePageUp = this.handlePageUp.bind(this);
  }

  handlePageUp() {

    this.setState({
      pageNum: 1
    });
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
import React from 'react';
import PlayerImage from '../Shared/PlayerImage';
import PlayerName from '../Shared/PlayerName';
import MessageContent from './MessageContent';

// Components should represent one piece of data model
class MessageBox extends React.Component {

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
      <section className="message-box">
        <PlayerImage player={this.props.player} />
        <PlayerName player={this.props.player} />
        <MessageContent message={this.props.message} pageNum={this.state.pageNum} />
      </section>
    );
  }
}

export default MessageBox;
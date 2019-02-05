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

    // Setting base state
    this.state = {
      messageNum: 0
    };

    // State handlers
    this.handleMessageUp = this.handleMessageUp.bind(this);
    this.handleMessageDown = this.handleMessageDown.bind(this);

  }

  // Message up handler
  handleMessageUp() {
    this.setState({
      messageNum: 3
    });
  };

  // Message down handler
  handleMessageDown() {
    this.setState({
      messageNum: 1
    })
  };

  // Render method
  render() {
    return (
      <section className="message-box">
        <PlayerImage player={this.props.player} />
        <PlayerName player={this.props.player} />
        <MessageContent
          messages={this.props.messages}
          messageNum={this.state.messageNum}
          onMessageDown={this.handleMessageDown}
          onMessageUp={this.handleMessageUp} />
      </section>
    );
  }
}

export default MessageBox;
import React from 'react';

// Components should represent one piece of data model
class MessageContent extends React.Component {

  constructor(props) {

    super(props);
    this.handleMessageDown = this.handleMessageDown.bind(this);
    this.handleMessageUp = this.handleMessageUp.bind(this);
  }

  handleMessageDown(e) {
    this.props.onMessageDown(e.target);
  }

  handleMessageUp(e) {
    this.props.onMessageUp(e.target);
  }

  render() {

    const messages = this.props.messages;

    const messageNum = this.props.messageNum;

    console.log('Props on MessageContent component');
    console.log(this.props);

    console.log('State on MessageContent component');
    console.log(this.state);

    return (
      <div>
        <p className="message-content">{messages[messageNum]}</p>
        <span>{messageNum} / {messages.length}</span>
        <button onClick={this.handleMessageDown}>First</button>
        <button onClick={this.handleMessageDown}>Previous</button>
        <button onClick={this.handleMessageUp}>Next</button>
        <button onClick={this.handleMessageUp}>Latest</button>
      </div>

    );
  }
}

export default MessageContent;
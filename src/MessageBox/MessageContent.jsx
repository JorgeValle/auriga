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
    console.log('e.target is:');
    console.log(e.target);
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
        <nav className="message-nav">
          <button onClick={this.handleMessageDown}>First</button>
          <button onClick={this.handleMessageDown}>Previous</button>
          <button onClick={this.handleMessageUp}>Next</button>
          <button onClick={this.handleMessageUp}>Latest</button>
        </nav>
        <span>{messageNum} / {messages.length}</span>

      </div>

    );
  }
}

export default MessageContent;
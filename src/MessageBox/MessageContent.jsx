import React from 'react';

// Components should represent one piece of data model
class MessageContent extends React.Component {


  render() {

    const message = this.props.message;

    const pageNum = this.props.pageNum;
  
    return (
      <div>
        <p className="message-content">{message}</p>
        <span>{pageNum}</span>
        <button>Previous</button>
        <button>Next</button>
        <button>End</button>
      </div>

    );
  }
}

export default MessageContent;
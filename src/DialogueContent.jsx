import React from 'react';

// Components should represent one piece of data model
class DialogueContent extends React.Component {
  render() {

    const dialogue = this.props.dialogue;

    return (
      <p className="dialogue-content">{dialogue.value}</p>
    );
  }
}

export default DialogueContent;
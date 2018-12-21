import React from 'react';

// Components should represent one piece of data model
class DialogueContent extends React.Component {
  render() {

    console.log(this.props);

    const dialogue = this.props.dialogue[0];

    return (
      <p>{dialogue.value}</p>
    );
  }
}

export default DialogueContent;
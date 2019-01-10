import React from 'react';

// Components should represent one piece of data model
class DialogueContent extends React.Component {


  render() {

    const dialogue = this.props.dialogue;

    const pageNum = this.props.pageNum;
  
    return (
      <div>
        <p className="dialogue-content">{dialogue.value[pageNum]}</p>
        <span>{pageNum}</span>
      </div>

    );
  }
}

export default DialogueContent;
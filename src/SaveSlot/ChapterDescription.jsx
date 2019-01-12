import React from 'react';

// Components should represent one piece of data model
class ChapterDescription extends React.Component {
  render() {

    const chapter = this.props.chapter;

    return (
      <span className="chapter-description">{chapter.description}</span>
      );
  }
}

export default ChapterDescription;
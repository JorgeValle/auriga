import React from 'react';

// Components should represent one piece of data model
class ChapterNumber extends React.Component {
  render() {

    const chapter = this.props.chapter;

    return (
      <span className="chapter-number">Chapter {chapter.number}:</span>
      );
  }
}

export default ChapterNumber;
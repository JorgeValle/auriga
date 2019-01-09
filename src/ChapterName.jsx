import React from 'react';

// Components should represent one piece of data model
class ChapterName extends React.Component {
  render() {

    const chapter = this.props.chapter;

    return (
      <span>{chapter.name}</span> );
  }
}

export default ChapterName;
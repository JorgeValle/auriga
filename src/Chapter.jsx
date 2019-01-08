import React from 'react';

// Components should represent one piece of data model
class Chapter extends React.Component {
  render() {

    console.log(this.props);

    const chapter = this.props.chapter;

    return (
      <h1>{chapter.number}: {chapter.name}</h1>
    );
  }
}

export default Chapter;
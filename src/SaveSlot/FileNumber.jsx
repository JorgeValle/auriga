import React from 'react';

// Components should represent one piece of data model
class FileNumber extends React.Component {
  render() {

    // const time = this.props.time;

    return (
      <span className="file-number">
        <i className="fas fa-save"></i>
        &nbsp;1
      </span>
    );
  }
}

export default FileNumber;
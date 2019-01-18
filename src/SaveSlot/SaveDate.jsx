import React from 'react';

// Components should represent one piece of data model
class SaveDate extends React.Component {
  render() {

    const time = this.props.time;

    return (
      <div className="save-date">
        January 17
      </div>
    );
  }
}

export default SaveDate;
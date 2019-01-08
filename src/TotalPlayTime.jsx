import React from 'react';

// Components should represent one piece of data model
class TotalPlayTime extends React.Component {
  render() {

    console.log(this.props);

    const time = this.props.time;

    return (
      <span>{time.hours} hours and {time.mins} minutes</span>
    );
  }
}

export default TotalPlayTime;
import React from 'react';

// Components should represent one piece of data model
class TotalPlayTime extends React.Component {
  render() {

    const time = this.props.time;

    return (
      <time className="total-play-time">{time.hours}: {time.mins}</time>
    );
  }
}

export default TotalPlayTime;
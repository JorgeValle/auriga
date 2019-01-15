import React from 'react';

// Components should represent one piece of data model
class TotalPlayTime extends React.Component {
  render() {

    const time = this.props.time;

    return (
      <div className="total-play-time">
        <i className="fas fa-stopwatch"></i>
        <time>{time.hours}: {time.mins}</time>
      </div>
    );
  }
}

export default TotalPlayTime;
import React from 'react';

// Components should represent one piece of data model
class TotalPlayTime extends React.Component {
  render() {

    const time = this.props.time;

    return (
      <div>
        {/* <img className="hourglass" src="svgs/hourglass.svg" alt="Total play time hourglass" /> */}
        <time className="total-play-time">{time.hours}: {time.mins}</time>
      </div>
    );
  }
}

export default TotalPlayTime;
import React from 'react';

// Components should represent one piece of data model
class Ranks extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <section className="ranks">
        <div className="rank">
          <span className="rank-letter">1</span>
        </div>
        <div className="rank">
          <span className="rank-letter">2</span>
        </div>
        <div className="rank">
          <span className="rank-letter">3</span>
        </div>
        <div className="rank">
          <span className="rank-letter">4</span>
        </div>
        <div className="rank">
          <span className="rank-letter">5</span>
        </div>
        <div className="rank">
          <span className="rank-letter">6</span>
        </div>
        <div className="rank">
          <span className="rank-letter">7</span>
        </div>
        <div className="rank">
          <span className="rank-letter">8</span>
        </div>
      </section>
    );
  }
}

export default Ranks;
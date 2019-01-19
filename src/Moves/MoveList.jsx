import React from 'react';

// Components should represent one piece of data model
class MoveList extends React.Component {

  // Components should only update their own state
  render() {
    return (
      <section className="move-list">
        <div className="move-row">
          1
          <span className="move-1">
          a4
          </span>
          <span className="move-2">
          c5
          </span>
        </div>
      </section>
    );
  }
}

export default MoveList;
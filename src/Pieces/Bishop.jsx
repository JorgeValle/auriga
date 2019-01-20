import React from 'react';

// Components should represent one piece of data model
class Bishop extends React.Component {

  render() {
  
    return (
      <div className="bishop" draggable="true">
        <i className="fas fa-chess-bishop"></i>
      </div>
    );
  }
}

export default Bishop;
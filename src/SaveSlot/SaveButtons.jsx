import React from 'react';

// Components should represent one piece of data model
class SaveButtons extends React.Component {

  render() {
  
    return (
      <div className="save-buttons">
        <button>Overwrite</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default SaveButtons;
import React from 'react';

// Components should represent one piece of data model
class Files extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <div className="files">
        <div className="file">
          <span className="file-letter">a</span>
        </div>
        <div className="file">
          <span className="file-letter">b</span>
        </div>
        <div className="file">
          <span className="file-letter">c</span>
        </div>
        <div className="file">
          <span className="file-letter">d</span>
        </div>
        <div className="file">
          <span className="file-letter">e</span>
        </div>
        <div className="file">
          <span className="file-letter">f</span>
        </div>
        <div className="file">
          <span className="file-letter">g</span>
        </div>
        <div className="file">
          <span className="file-letter">h</span>
        </div>
      </div>
    );
  }
}

export default Files;
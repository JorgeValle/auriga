import React from 'react';

// Components should represent one piece of data model
class BlackSquare extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <section className="chess-mat">
      </section>
    );
  }
}

export default BlackSquare;
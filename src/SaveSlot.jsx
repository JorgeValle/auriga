import React from 'react';

// Components should represent one piece of data model
class SaveSlot extends React.Component {
  render() {
    return (
      <section>
        <SaveSlot character={this.props.character} />
      </section>
    );
  }
}

export default SaveSlot;
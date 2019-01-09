import React from 'react';

// Components should represent one piece of data model
class PartyImages extends React.Component {
  render() {

    const party = this.props.party;

    return (
      <div className="party-images">
        <img src={party[0].image} alt={party[0].description} title={party[0].description} />
        <img src={party[1].image} alt={party[1].description} title={party[1].description} />
        <img src={party[2].image} alt={party[2].description} title={party[2].description} />
      </div>
    );
  }
}

export default PartyImages;
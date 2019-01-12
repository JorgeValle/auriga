import React from 'react';

// Components should represent one piece of data model
class ExperiencePoints extends React.Component {
  render() {

    const xp = this.props.character.stats.xp;

    return (
      <div className="experience-points">
        <span>XP</span>
        <progress value={xp.current} max={xp.max}></progress>
      </div>
    );
  }
}

export default ExperiencePoints;
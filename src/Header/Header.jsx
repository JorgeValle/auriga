import React from 'react';
import {
  BrowserRouter as Link
} from 'react-router-dom';

// Components should represent one piece of data model
class Header extends React.Component {

  render() {
    return (
      <header className="header">
        {/* <i className="fas fa-chess-king"></i> */}
        <h1 className="brand">Caissa</h1>
        <p>As a kid, I grew up playing a lot of RPG and strategy games. Far and away, they were my favorite games. They still are. Games like <a href="https://en.wikipedia.org/wiki/Dragon_Force">Dragon Force</a>, <a href="https://en.wikipedia.org/wiki/Final_Fantasy_Tactics">Final Fantasy Tactics</a> and <a href="https://en.wikipedia.org/wiki/Tactics_Ogre:_Let_Us_Cling_Together">Tactics Ogre</a> have a special place in my heart.</p>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chessboard">Chessboard</Link>
          </li>
          <li>
            <Link to="/player">Player</Link>
          </li>
          <li>
            <Link to="/save-slot">Save Slot</Link>
          </li>
          <li>
            <Link to="/message-box">Message Box</Link>
          </li>
          <li>
            <Link to="/game-view">Game View</Link>
          </li>
        </ul> */}
      </header>
    );
  }
}

export default Header;
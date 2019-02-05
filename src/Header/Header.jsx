import React from 'react';
import {
  BrowserRouter as Router, Link
} from 'react-router-dom';

// Components should represent one piece of data model
class Header extends React.Component {

  render() {
    return (
      <header className="header">
        {/* <i className="fas fa-chess-king"></i> */}
        <h1 className="brand">
          Endgame
        </h1>
        <p className="tagline">A chess app.</p>
        <span className="version">
          <i className="fas fa-code-branch"></i> Alpha
        </span>
        <nav className="main-menu">
          <ul>
            <li>
              <Link to="/play">Play</Link>
              <ul>
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
                  <Link to="/move-list">Move List</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/watch">Watch</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <nav className="user-menu">
          <div className="user">
            <Link to="/user">
              <i className="far fa-user" title="User menu"></i>
            </Link>
          </div>
          <div className="sign-out">
            <Link to="/signed-out">
              <i className="fas fa-sign-out-alt" title="Sign out"></i>
            </Link>
          </div>
        </nav>



      </header>
    );
  }
}

export default Header;
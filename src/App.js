import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import Chessboard from './Chessboard/Chessboard';
import Player from './Player/Player';
import MessageBox from './MessageBox/MessageBox';
import SaveSlot from './SaveSlot/SaveSlot';
import GameView from './Views/GameView';

const PLAYERS = [
  {
    name: 'Delita Heiral',
    image: 'https://placehold.it/144x233',
    status: 'Fighting evil',
    color: 'white'
  },
  {
    name: 'Dycedarg Beoulve',
    image: 'https://placehold.it/144x233',
    status: 'Being the bad guy',
    color: 'black'
  }
];


const MESSAGES = [
  'Sed pellentesque eu purus nec dapibus. Aenean congue laoreet nibh, id tristique nibh dictum et. Pellentesque sit amet finibus nibh, non blandit mauris.',
  'Morbi at ligula ut orci pharetra interdum nec elementum velit. Suspendisse ac felis odio. Phasellus vestibulum elit quis augue rhoncus convallis.',
  'Donec libero felis, feugiat eget sapien eget, vehicula vehicula odio. Quisque eu viverra erat. Phasellus sodales nibh ultricies eros sagittis lacinia.'
];

const TIME = [
  {
    hours: 14,
    mins: 32
  }
]

function App() {
  return(
    <Router>
      <main className="main">

        <div className="masthead">
          <i className="fas fa-chess-king"></i>
          <h1 className="brand">Shah Mat</h1>
        </div>

        <section className="intro">
          <p>As a kid, I grew up playing a lot of RPG and strategy games. Far and away, they were my favorite games. They still are. Games like <a href="https://en.wikipedia.org/wiki/Dragon_Force">Dragon Force</a>, <a href="https://en.wikipedia.org/wiki/Final_Fantasy_Tactics">Final Fantasy Tactics</a> and <a href="https://en.wikipedia.org/wiki/Tactics_Ogre:_Let_Us_Cling_Together">Tactics Ogre</a> have a special place in my heart.</p>
          <p>Euler's Quest is (hopefully) the beginning of a role-playing and strategy game. It is currently just a series of user interface elements typically found in RPGs. Stuff like character profiles, item descriptions and dialogue components - all working together to create the style of a medieval western world. It's inspired by a lot of older games, but it's built using pretty modern CSS techniques and React components.</p>
          <p>One day, I might get around to developing the game itself.</p>
          <ul>
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
          </ul>
        </section>
        
        <Route path="/chessboard" render={(props) => <Chessboard {...props} player={PLAYERS[0]} />} />
        <Route path="/player" render={(props) => <Player {...props} player={PLAYERS[0]} />} />
        <Route path="/save-slot" render={(props) => <SaveSlot {...props} player={PLAYERS[0]} time={TIME[0]} />} />
        <Route path="/message-box" render={(props) => <MessageBox {...props} player={PLAYERS[0]} message={MESSAGES[0]} />} />
        <Route path="/game-view" render={(props) => <GameView {...props} player={PLAYERS[0]} message={MESSAGES[0]} />} />

      </main>
    </Router>
  )
}

export default App;
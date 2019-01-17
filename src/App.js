import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import Header from './Header/Header';
import Chessboard from './Chessboard/Chessboard';
import Player from './Player/Player';
import MessageBox from './MessageBox/MessageBox';
import SaveSlot from './SaveSlot/SaveSlot';
import PlayView from './Views/PlayView';

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
  'I just took your bishop, and you are down three pawns. Definitely winning.',
  'Morbi at ligula ut orci pharetra interdum nec elementum velit. Suspendisse ac felis odio. Phasellus vestibulum elit quis augue rhoncus convallis.',
  'Donec libero felis, feugiat eget sapien eget, vehicula vehicula odio. Quisque eu viverra erat. Phasellus sodales nibh ultricies eros sagittis lacinia.'
];

const TIME = [
  {
    hours: 14,
    mins: 32
  }
]

const PIECES = [
  {
    name: 'King',
    value: 100
  },
  {
    name: 'Queen',
    value: 9
  },
  {
    name: 'Rook',
    value: 5
  },
  {
    name: 'Bishop',
    value: 3
  },
  {
    name: 'Knight',
    value: 3
  },
  {
    name: 'Pawn',
    value: 1
  }
];



function App() {
  return(
    <Router>   
      <div className="body">
        <Header />
          <main className="main">          
            <Route path="/chessboard" render={(props) => <Chessboard {...props} player={PLAYERS[0]} />} />
            <Route path="/player" render={(props) => <Player {...props} player={PLAYERS[0]} />} />
            <Route path="/save-slot" render={(props) => <SaveSlot {...props} player={PLAYERS[0]} time={TIME[0]} />} />
            <Route path="/message-box" render={(props) => <MessageBox {...props} player={PLAYERS[0]} message={MESSAGES[0]} />} />
            <Route path="/play" render={(props) => <PlayView {...props} player={PLAYERS[0]} message={MESSAGES[0]} />} />
          </main>
      </div>
    </Router>
  )
}

export default App;
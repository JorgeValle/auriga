import React from 'react';

// Views
import Player from '../Player/Player';
import Chessboard from '../Chessboard/Chessboard';
import MessageBox from '../MessageBox/MessageBox';


// Components should represent one piece of data model
class GameView extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <main className="game-view">
        <Chessboard player={this.props.player} />
        <Player player={this.props.player} />
        <MessageBox player={this.props.player} message={this.props.message}/>
      </main>
    );
  }
}

export default GameView;
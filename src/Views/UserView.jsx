import React from 'react';

// Views
// import Player from '../Player/Player';
// import Chessboard from '../Chessboard/Chessboard';
// import MessageBox from '../MessageBox/MessageBox';

// Components should represent one piece of data model
class UserView extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <section className="user-view">
        <p>User view</p>

        <form>
          <fieldset>
            <legend>Invite to play</legend>
            <input type="" name="" />
            <button>Invite</button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default UserView;
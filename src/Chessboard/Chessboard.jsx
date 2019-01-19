import React from 'react';
import Ranks from '../Coordinates/Ranks';
import Files from '../Coordinates/Files';

// Components should represent one piece of data model
class Chessboard extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <div className="chessboard-container">
        <Files />
        <Ranks />
        <section className="chessboard">
          {/*Rank 1*/}
          <div className="rank-row">
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
          </div>
          {/*Rank 2*/}
          <div className="rank-row">
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
          </div>
          {/*Rank 3*/}
          <div className="rank-row">
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
          </div>
          {/*Rank 4*/}
          <div className="rank-row">
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
          </div>
          {/*Rank 5*/}
          <div className="rank-row">
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
          </div>
          {/*Rank 6*/}
          <div className="rank-row">
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
          </div>
          {/*Rank 7*/}
          <div className="rank-row">
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
          </div>
          {/*Rank 8*/}
          <div className="rank-row">
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
            <div className="black"></div>
            <div className="white"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default Chessboard;
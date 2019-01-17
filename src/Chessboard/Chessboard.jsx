import React from 'react';

// Components should represent one piece of data model
class Chessboard extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <section className="chessboard">

        {/*Rank 1*/}
        <div className="rank">
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
        <div className="rank">
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
        <div className="rank">
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
        <div className="rank">
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
        <div className="rank">
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
        <div className="rank">
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
        <div className="rank">
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
        <div className="rank">
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
    );
  }
}

export default Chessboard;
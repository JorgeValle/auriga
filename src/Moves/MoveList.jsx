import React from 'react';

// Components should represent one piece of data model
class MoveList extends React.Component {

  // Components should only update their own state
  render() {
    return (
      <table class="move-list">
        <thead class="move-list-header">
          <tr>
            <th>#</th>
            <th>White</th>
            <th>Black</th>
          </tr>
        </thead>
        <tbody>
          <tr className="move-1">
            <th>1</th>
            <td>a4</td>
            <td>c5</td>
          </tr>
          <tr className="move-2">
            <th>2</th>
            <td>a1</td>
            <td>c8</td>
          </tr>
          <tr className="move-3">
            <th>3</th>
            <td>b4</td>
            <td>e5</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MoveList;
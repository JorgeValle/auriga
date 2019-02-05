import React from 'react';

// Components should represent one piece of data model
class MoveList extends React.Component {

  // Components should only update their own state
  render() {
    return (
      <table class="move-list">
        <thead class="move-list-header">
          <tr>
            <th class="grey">#</th>
            <th class="white">White</th>
            <th class="black">Black</th>
          </tr>
        </thead>
        <tbody>
          <tr className="move-1">
            <th class="grey">1</th>
            <td>a4</td>
            <td class="black">c5</td>
          </tr>
          <tr className="move-2">
            <th class="grey">2</th>
            <td>a1</td>
            <td class="black">c8</td>
          </tr>
          <tr className="move-3">
            <th class="grey">3</th>
            <td>b4</td>
            <td class="black">e5</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MoveList;
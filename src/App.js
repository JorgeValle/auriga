import React, {Component} from 'react';
// import CharacterImage from './CharacterImage';
// import CharacterName from './CharacterName';
// import DialogueContent from './DialogueContent';
import DialogueBox from './DialogueBox';

const CHARACTER = [
  {
    name: 'Delita Heiral',
    image: 'https://placehold.it/144x233',
    description: 'Sed pellentesque eu purus nec dapibus'
  }
];

const DIALOGUE = [
  {
    value: 'Sed pellentesque eu purus nec dapibus. Aenean congue laoreet nibh, id tristique nibh dictum et. Pellentesque sit amet finibus nibh, non blandit mauris.'
  }
];

class App extends Component {
  render() {
    return (
      <DialogueBox dialogue={DIALOGUE} character={CHARACTER} />
    );
  }
}

export default App;
import React, {Component} from 'react';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import CharacterProfile from './CharacterProfile';
import CharacterLevelUp from './CharacterLevelUp';
import DialogueBox from './DialogueBox';
import SaveSlot from './SaveSlot';

const CHARACTER = {
  name: 'Delita Heiral',
  job: 'Arithmetician',
  image: 'https://placehold.it/144x233',
  description: 'Sed pellentesque eu purus nec dapibus',
  stats: {
    hp: {
      current: 101,
      max: 202
    },
    mp: {
      current: 59,
      max: 89
    },
    xp: {
      level: 2,
      current: 2345,
      next: 2500
    }
  }
};

const PARTY = [
  {
    name: 'Cloud Strife',
    job: 'Arithmetician',
    image: 'https://placehold.it/55x34',
    description: 'Sed pellentesque eu purus nec dapibus',
    stats: {
      hp: {
        current: 101,
        max: 202
      },
      mp: {
        current: 59,
        max: 89
      },
      xp: {
        level: 2,
        current: 2345,
        next: 2500
      }
    }
  },
  {
    name: 'Ramza Beoulve',
    job: 'Knight',
    image: 'https://placehold.it/55x34',
    description: 'Nulla eros ex, consequat a dapibus',
    stats: {
      hp: {
        current: 202,
        max: 255
      },
      mp: {
        current: 12,
        max: 16
      },
      xp: {
        level: 5,
        current: 222,
        next: 234
      }
    }
  },
  {
    name: 'Agrias',
    job: 'Holy Knight',
    image: 'https://placehold.it/55x34',
    description: 'Morbi tristique nisi lorem, vitae ultrices tellus dapibus et',
    stats: {
      hp: {
        current: 121,
        max: 167
      },
      mp: {
        current: 144,
        max: 876
      },
      xp: {
        level: 12,
        current: 12312,
        next: 12923,
      }
    }
  }
];

const DIALOGUE = [
  {
    value: 'Sed pellentesque eu purus nec dapibus. Aenean congue laoreet nibh, id tristique nibh dictum et. Pellentesque sit amet finibus nibh, non blandit mauris.'
  }
];

const CHAPTER = [
  {
    name: 'Church Escape',
    number: 3
  }
];

const TIME = [
  {
    hours: 4,
    mins: 32
  }
]

const ABILITIES = [
  
];

function App() {
  return(
    <Router>
      <div>

        <h1>Auriga</h1>
        
        <p>As a kid, I grew up playing a lot of RPG and strategy games. Far and away, they were my favorite games. They still are. Games like <a href="https://en.wikipedia.org/wiki/Dragon_Force">Dragon Force</a>, <a href="https://en.wikipedia.org/wiki/Final_Fantasy_Tactics">Final Fantasy Tactics</a> and <a href="https://en.wikipedia.org/wiki/Tactics_Ogre:_Let_Us_Cling_Together">Tactics Ogre</a> have a special place in my heart.</p>

        <p>Auriga is a visual language for an imaginary (or yet to be developed?) role-playing and strategy game. It is a series of user interface elements typically found in RPGs. Stuff like character profiles, item descriptions and dialogue components - all working together to create the style of a medieval western world. It's inspired by a lot of older games, but it's built using pretty modern CSS techniques and React components.</p>

        <p>One day, I might get around to developing the game itself.</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/character-profile">Character Profile</Link>
          </li>
          <li>
            <Link to="/character-level-up">Character Level Up</Link>
          </li>
          <li>
            <Link to="/save-slot">Save Slot</Link>
          </li>
          <li>
            <Link to="/dialogue-box">Dialogue Box</Link>
          </li>
        </ul>
{/* 
        <Route exact path="/" component={Home} /> */}
        <Route path="/character-profile" render={(props) => <CharacterProfile {...props} character={CHARACTER} />} />
        <Route path="/character-level-up" render={(props) => <CharacterLevelUp {...props} character={CHARACTER} />} />
        <Route path="/save-slot" render={(props) => <SaveSlot {...props} character={CHARACTER} party={PARTY} chapter={CHAPTER[0]} time={TIME[0]} />} />
        <Route path="/dialogue-box" render={(props) => <DialogueBox {...props} character={CHARACTER} dialogue={DIALOGUE[0]} />} />

      </div>
    </Router>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <DialogueBox dialogue={DIALOGUE} character={CHARACTER} />,
//       <CharacterProfile character={CHARACTER[1]} />,
//       <CharacterLevelUp character={CHARACTER[2]} />
//     );
//   }
// }

export default App;
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Rook from './Rook.jsx';

// We shallow render to make sure changes in children don't cause cascading fails

configure({
  adapter: new Adapter()
});

describe('<Rook />', () => {

  it('shallow renders', () => {
    const wrapper = shallow(<Rook />);
  });

});


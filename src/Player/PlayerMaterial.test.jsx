import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import PlayerMaterial from './PlayerMaterial.jsx';

// We shallow render to make sure changes in children don't cause cascading fails

configure({
  adapter: new Adapter()
});

describe('<PlayerMaterial />', () => {

  it('shallow renders', () => {
    const wrapper = shallow(<PlayerMaterial />);
  });

});


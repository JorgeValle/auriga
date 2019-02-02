import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import PlayerMaterial from './PlayerMaterial.jsx';

configure({
  adapter: new Adapter()
});

describe('<PlayerMaterial />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<PlayerMaterial />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<PlayerMaterial />);
    expect(wrapper).toMatchSnapshot();
  });

});
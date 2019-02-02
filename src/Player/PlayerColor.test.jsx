import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import PlayerColor from './PlayerColor.jsx';

configure({
  adapter: new Adapter()
});

describe('<PlayerColor />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<PlayerColor />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<PlayerColor />);
    expect(wrapper).toMatchSnapshot();
  });

});


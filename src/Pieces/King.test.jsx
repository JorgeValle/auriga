import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import King from './King.jsx';

configure({
  adapter: new Adapter()
});

describe('<King />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<King />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<King />);
    expect(wrapper).toMatchSnapshot();
  });

});


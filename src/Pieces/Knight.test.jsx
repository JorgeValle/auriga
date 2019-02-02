import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Knight from './Knight.jsx';

configure({
  adapter: new Adapter()
});

describe('<Knight />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Knight />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Knight />);
    expect(wrapper).toMatchSnapshot();
  });

});


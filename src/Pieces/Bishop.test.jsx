import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Bishop from './Bishop.jsx';

configure({
  adapter: new Adapter()
});

describe('<Bishop />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Bishop />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Bishop />);
    expect(wrapper).toMatchSnapshot();
  });

});
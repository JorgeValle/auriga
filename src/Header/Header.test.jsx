import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from './Header.jsx';

configure({
  adapter: new Adapter()
});

describe('<Header />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Header />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

});
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Files from './Files.jsx';

configure({
  adapter: new Adapter()
});

describe('<Files />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Files />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Files />);
    expect(wrapper).toMatchSnapshot();
  });

});


import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Queen from './Queen.jsx';

configure({
  adapter: new Adapter()
});

describe('<Queen />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Queen />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Queen />);
    expect(wrapper).toMatchSnapshot();
  });

});


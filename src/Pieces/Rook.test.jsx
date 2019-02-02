import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Rook from './Rook.jsx';

configure({
  adapter: new Adapter()
});

describe('<Rook />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Rook />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Rook />);
    expect(wrapper).toMatchSnapshot();
  });

});


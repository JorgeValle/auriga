import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Pawn from './Pawn.jsx';

configure({
  adapter: new Adapter()
});

describe('<Pawn />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Pawn />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Pawn />);
    expect(wrapper).toMatchSnapshot();
  });

});


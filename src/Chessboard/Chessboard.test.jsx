import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Chessboard from './Chessboard.jsx';

configure({
  adapter: new Adapter()
});

describe('<Chessboard />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Chessboard />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Chessboard />);
    expect(wrapper).toMatchSnapshot();
  });

});


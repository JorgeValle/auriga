import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import MoveList from './MoveList.jsx';

configure({
  adapter: new Adapter()
});

describe('<MoveList />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<MoveList />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<MoveList />);
    expect(wrapper).toMatchSnapshot();
  });

});


import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Ranks from './Ranks.jsx';

configure({
  adapter: new Adapter()
});

describe('<Ranks />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<Ranks />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<Ranks />);
    expect(wrapper).toMatchSnapshot();
  });

});


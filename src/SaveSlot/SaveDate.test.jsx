import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SaveDate from './SaveDate.jsx';

configure({
  adapter: new Adapter()
});

describe('<SaveDate />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<SaveDate />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<SaveDate />);
    expect(wrapper).toMatchSnapshot();
  });

});


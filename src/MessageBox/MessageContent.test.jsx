import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import MessageContent from './MessageContent.jsx';

configure({
  adapter: new Adapter()
});

describe('<MessageContent />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<MessageContent />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<MessageContent />);
    expect(wrapper).toMatchSnapshot();
  });

});
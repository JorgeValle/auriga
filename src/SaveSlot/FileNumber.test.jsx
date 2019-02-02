import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FileNumber from './FileNumber.jsx';

configure({
  adapter: new Adapter()
});

describe('<FileNumber />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<FileNumber />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<FileNumber/>);
    expect(wrapper).toMatchSnapshot();
  });

});


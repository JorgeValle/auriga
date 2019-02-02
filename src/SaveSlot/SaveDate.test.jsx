import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SaveDate from './SaveDate.jsx';

// We shallow render to make sure changes in children don't cause cascading fails

configure({
  adapter: new Adapter()
});

describe('<SaveDate />', () => {

  it('shallow renders', () => {
    const wrapper = shallow(<SaveDate />);
  });

});


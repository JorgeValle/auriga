import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SaveButtons from './SaveButtons.jsx';

configure({
  adapter: new Adapter()
});

describe('<SaveButtons />', () => {

  // We shallow render to make sure changes in children don't cause cascading fails
  it('shallow renders', () => {
    const wrapper = shallow(<SaveButtons />);
  });

  // Snapshot matching
  it('matches snapshot', () => {
    const wrapper = shallow(<SaveButtons />);
    expect(wrapper).toMatchSnapshot();
  });

});


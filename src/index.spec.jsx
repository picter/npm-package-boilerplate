import React from 'react';
import { shallow } from 'enzyme';
import { Example } from './';

describe('[Component] Example', () => {
  it('renders without crashing.', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders an h1.', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});

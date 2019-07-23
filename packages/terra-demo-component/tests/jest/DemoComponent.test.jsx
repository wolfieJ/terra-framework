import React from 'react';
import DemoComponent from '../../src/DemoComponent';

describe('DemoComponent', () => {
  const defaultRender = <DemoComponent />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.demo-component').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class demo-component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('demo-component');
  });
});

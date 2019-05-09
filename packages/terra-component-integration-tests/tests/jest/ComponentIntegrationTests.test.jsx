import React from 'react';
import ComponentIntegrationTests from '../../src/ComponentIntegrationTests';

describe('ComponentIntegrationTests', () => {
  const defaultRender = <ComponentIntegrationTests />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.component-integration-tests').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class component-integration-tests', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('component-integration-tests');
  });
});

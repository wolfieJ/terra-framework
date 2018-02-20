import React from 'react';
import EmbeddedComponent from '../../src/EmbeddedComponent';

describe('EmbeddedComponent', () => {
  const defaultRender = <EmbeddedComponent basePath="../dist" />;
  const withPlaceholder = <EmbeddedComponent basePath="../dist" placeholder={<div>placeholder</div>} />;
  const withTimeout = <EmbeddedComponent basePath="../dist" timeoutComponent={<div>timeout</div>}/>;
  // jest.mock('fetch');
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
        resolve('{ "index.js": "index.js" }');
      });
      return p;
    });
  });

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use blank message when no placeholder is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.text()).toEqual('');
  });

  it('should use the placeholder message when placeholder is given', () => {
    const wrapper = shallow(withPlaceholder);
    expect(wrapper.text()).toEqual('placeholder');
  });

  it('should use the default timeout when no timeout is given', () => {
    const wrapper = shallow(defaultRender);
    wrapper.setState({ timeout: true });
    expect(wrapper.dive().text()).toEqual('Component mounting is timed out.');
  });

  it('should use the custom timeout when timeout is given', () => {
    const wrapper = shallow(withTimeout);
    wrapper.setState({ timeout: true });
    expect(wrapper.text()).toEqual('timeout');
  });

  // it('should render the component', async () => {
  //   const wrapper = shallow(defaultRender);
  //   await wrapper.instance().fetchManifest();
  //   expect(wrapper.text()).toEqual('Component mounting is timed out.');
  // });

  // Structure Tests
  // it('should have the class embedded-component', () => {
  //   const wrapper = shallow(defaultRender);
  //   expect(wrapper.prop('className')).toContain('embedded-component');
  // });
});

/* global browser, Terra, before */
Terra.describeViewports('Basic Test', ['huge', 'tiny'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-demo-component/demo-component/demo-component');
    });

    Terra.it.validatesElement();
  });
});

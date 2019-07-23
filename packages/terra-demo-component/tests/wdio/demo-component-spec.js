/* global browser, Terra, before */
Terra.viewports('tiny', 'medium', 'large').forEach((viewport) => {
  describe('DemoComponent', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Default', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-demo-component/default-demo-component');
      });

      Terra.should.validateElement();
    });
  });
});

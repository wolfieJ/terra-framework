/* global browser, Terra, before */
Terra.viewports('tiny', 'medium', 'large').forEach((viewport) => {
  describe('ComponentIntegrationTests', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Default', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-component-integration-tests/default-component-integration-tests');
      });

      Terra.should.validateElement();
    });
  });
});

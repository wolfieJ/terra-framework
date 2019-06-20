Terra.describeViewports('Menu Item Group', ['medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-menu/menu/menu-item-group/menu-item-group-default');
  });

  describe('Menu Item Group-Default', () => {
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Menu Item Group-Selectable Via Click', () => {
    it('selects Item 3', () => {
      browser.click('.TestGroupItem3');
    });
    Terra.it.matchesScreenshot('Item 3 Selected');
    Terra.it.isAccessible();

    it('selects Item 1 and deselects Item 3', () => {
      browser.click('.TestGroupItem1');
      browser.moveToObject('h3');
    });
    Terra.it.matchesScreenshot('Item 1 Selected');
  });

  describe('Menu Item Group-Selectable Via Keyboard Navigation', () => {
    it('selects Item 2 on Enter', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.it.matchesScreenshot('Item 2 Selected');

    it('selects Item 3 on Space', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.it.matchesScreenshot('Item 3 Selected');
  });
});

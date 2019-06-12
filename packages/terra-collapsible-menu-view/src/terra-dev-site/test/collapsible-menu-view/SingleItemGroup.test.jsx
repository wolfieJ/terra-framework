import React from 'react';
import CollapsibleMenuView from '../../../CollapsibleMenuView';
// const locales = ['en', 'en-AU', 'en-US', 'en-GB', 'es', 'es-US', 'es-ES', 'de', 'fi-FI', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE'];
const locales = ['en', 'en-AU', 'en-US', 'en-GB', 'es', 'es-US', 'es-ES', 'de', 'fi-FI', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE', 'es-ES', 'de', 'fi-FI', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE'];
const CollapsibleMenuViewSingleItem = () => {
  const items = [];
  items.push(
    <CollapsibleMenuView.ItemGroup
      key="locale"
    >
      {locales.map(locale => (
        <CollapsibleMenuView.Item
          text={locale}
          key={locale}
        />
      ))}
    </CollapsibleMenuView.ItemGroup>,
  );
  return (
  /* Both of these methods works for both one large single item group and more than one item group
    What I have found with the previous implementation is that with only calling items in the collapse menu
    it gives different results for different browser window size */

  // Previous Implementation try with 67% till 100% browser size
    /* <CollapsibleMenuView key="menu">
      {items}
    </CollapsibleMenuView> */
    <CollapsibleMenuView key="menu">
      {items.map(item => (
        <div>
          {item}
        </div>
      ))}
    </CollapsibleMenuView>
    /* <CollapsibleMenuView key="menu">
      {items.length > 1 ? items.map(item => (
          item
        )) : items[0]
      }
    </CollapsibleMenuView > */
  );
};

export default CollapsibleMenuViewSingleItem;

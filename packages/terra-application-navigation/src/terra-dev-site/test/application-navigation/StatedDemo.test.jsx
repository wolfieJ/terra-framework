import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';
//import ApplicationNavigation from 'terra-application-navigation';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import StartScreen from './StartScreen';


const titleConfig = {
  headline: 'Cerner',
  title: 'PowerChart Touch',
};

const userConfig = {
  name: 'MD12345',
  initials: 'MD',
};

const extensionItems = [
  {
    icon: <IconSearch />,
    key: 'search',
    text: 'Search',
    metaData: {
      test: 'search',
    },
  }
];

const SamplePCTouch = () => {

  function handleItemSelection(key) {
    setLastActionKey(`Current Action: ${key}`);
  }

  return (
    <ApplicationBase locale="en">
      <ApplicationNavigation
        titleConfig={titleConfig}
        userConfig={userConfig}
        extensionItems={extensionItems}
        onSelectExtensionItem={handleItemSelection}
        onSelectSettings={() => handleItemSelection('settings')}
        onSelectHelp={() => handleItemSelection('help')}
        onSelectLogout={() => handleItemSelection('logout')}
      >
        <StartScreen />
      </ApplicationNavigation>
    </ApplicationBase>
  );
};

export default SamplePCTouch;

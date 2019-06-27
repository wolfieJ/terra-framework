import { useLayoutEffect, useContext } from 'react';
import DisclosureHeaderContext from './DisclosureHeaderContext';

const DisclosureHeaderAdapter = ({ title, actions, blockNavigation }) => {
  const registerHeaderData = useContext(DisclosureHeaderContext);

  useLayoutEffect(() => {
    registerHeaderData({ title, actions, blockNavigation });
  }, [title, actions, blockNavigation]);

  return null;
};

export default DisclosureHeaderAdapter;

import { useLayoutEffect, useContext } from 'react';
import DisclosureHeaderContext from './DisclosureHeaderContext';

const DisclosureHeaderAdapter = ({ title, actions }) => {
  const registerHeaderData = useContext(DisclosureHeaderContext);

  useLayoutEffect(() => {
    registerHeaderData(title, actions);
  }, [title, actions]);

  return null;
};

export default DisclosureHeaderAdapter;

import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { pathWithParameters } from './utils/helpers';

class ContentPlaceholder extends React.Component {
  componentDidMount() {
    const { layoutConfig } = this.props;
    if ((layoutConfig.size === 'tiny' || layoutConfig.size === 'small') && !layoutConfig.menuIsOpen) {
      layoutConfig.toggleMenu();
    }
  }

  render() {
    const { match, layoutConfig, autoselectPath, placeholderContent } = this.props;

    if (autoselectPath && layoutConfig.size !== 'tiny' && layoutConfig.size !== 'small') {
      return <Redirect to={pathWithParameters(autoselectPath, match.params)} />;
    }

    return placeholderContent || <div>Default Placeholder</div>;
  }
}


export default withRouter(ContentPlaceholder);

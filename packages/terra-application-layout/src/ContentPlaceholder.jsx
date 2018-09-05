import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class ContentPlaceholder extends React.Component {
  componentDidMount() {
    const { layoutConfig } = this.props;
    if ((layoutConfig.size === 'tiny' || layoutConfig.size === 'small') && !layoutConfig.menuIsOpen) {
      layoutConfig.toggleMenu();
    }
  }

  render() {
    const { layoutConfig, autoselectPath, placeholderContent } = this.props;

    if (layoutConfig.size !== 'tiny' && layoutConfig.size !== 'small') {
      if (autoselectPath) {
        return <Redirect to={autoselectPath} />;
      }
    } else {
      return placeholderContent;
    }


    return <div>huh</div>;
  }
}

export default withRouter(ContentPlaceholder);

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

    if (autoselectPath) {
      const matchParams = this.props.match.params;
      const pathWithCurrentParameters = Object.keys(matchParams).reduce((updatedString, paramId) => {
        const paramTest = new RegExp(`:${paramId}`);
        return updatedString.replace(paramTest, matchParams[paramId]);
      }, autoselectPath);


      if (layoutConfig.size !== 'tiny' && layoutConfig.size !== 'small' && autoselectPath) {
        return <Redirect to={pathWithCurrentParameters} />;
      }
    }

    return placeholderContent || <div>Default Placeholder</div>;
  }
}


export default withRouter(ContentPlaceholder);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getThemes } from './themes';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);
    const allThemes = getThemes();

    this.state = {
      theme: allThemes[0]
    }

    this.switchTheme = this.switchTheme.bind(this);
  }

  getChildContext() {
    return {
      theme: this.state.theme,
      switchTheme: this.switchTheme
    };
  }

  getTheme = () => {
    const allThemes = getThemes();
    return allThemes[0];
  }

  switchTheme = () => {
    this.setState({
      theme: this.getTheme()
    });
  }

  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div className="theme-switcher">
        <style jsx="true">
        {`
          body {
            background-color: ${theme.bgPrimary};
            body, h1, h2, h3, h4, h5, h6, p, ol, ul {
              color: ${theme.textPrimary}
            }
          }
        `}
        </style>
        { children }
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  children: PropTypes.node
}

ThemeSwitcher.childContextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
}

export default ThemeSwitcher;
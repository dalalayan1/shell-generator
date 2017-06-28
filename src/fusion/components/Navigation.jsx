import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './Navigation.css';

const Navigation = (props) => {
  const { theme, links, align } = props;

  return (
    <div className={classnames('navigation', `acss-theme-${theme}`, `align-${align}`, 'acss-background-secondary')}>
      <ul>
        {links && links.map((link) =>
          <li key={`key-${link.index}`}>
            <a
              href={link.url}
              className={classnames('nav-links', `acss-theme-${theme}`)}
            >
              {link.title}
            </a>
          </li>
        )}
      </ul>
      <ul>
        <li>
          <a
              href='/'
              className={classnames('nav-links', `acss-theme-${theme}`)}
          >
          light
          </a>
        </li> 
        <li>
          <a
              href='/dark'
              className={classnames('nav-links', `acss-theme-${theme}`)}
          >
          dark
          </a>
        </li>
        <li>
          <a
              href='/cerulean'
              className={classnames('nav-links', `acss-theme-${theme}`)}
          >
          cerulean
          </a>
        </li>
        <li>
          <a
              href='/zombie'
              className={classnames('nav-links', `acss-theme-${theme}`)}
          >
          zombie
          </a>
        </li>
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  /**
  * Theme
  */
  theme: PropTypes.oneOf(['light', 'dark', 'cerulean', 'zombie']),
  /**
   * Links
  */
  links: PropTypes.arrayOf(PropTypes.shape({})),
  /**
  * Nav Links Alignment
  */
  align: PropTypes.oneOf(['left', 'right'])
};

Navigation.defaultProps = {
  align: 'left',
  theme: 'light'
};

export default Navigation;
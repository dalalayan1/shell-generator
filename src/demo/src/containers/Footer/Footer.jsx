import React, { PropTypes } from 'react';
import './Footer.css';
import classnames from 'classnames';

const Footer = ({ ...props }) => {
  const { currentYear, links, theme } = props;

  return (
    <div className={classnames('footer', 'acss-footer', `acss-theme-${theme}`)}>
      <ul className="links">
        {links.map((link) =>
          <li key={`key-${link.index}`}><a key={link.name} href={link.url}>{link.title}</a></li>
        )}
      </ul>

      <span> &copy; Copyright {currentYear} mySite.com </span>
    </div>
  );
};

Footer.propTypes = {
  /**
   * Links Array
  */
  links: PropTypes.arrayOf(PropTypes.shape({})),
  /**
   * Current Year
  */
  currentYear: PropTypes.number,
  /**
  * Theme
  */
  theme: PropTypes.oneOf(['light', 'dark', 'cerulean', 'zombie'])
};

export default Footer;

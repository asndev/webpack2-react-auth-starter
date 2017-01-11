import React, { PropTypes } from 'react';
import Button from 'views/components/button';

const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <ul className="header__actions">
        {authenticated ? <li><Button onClick={signOut}>Sign out</Button></li> : null}
      </ul>
    </header>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Header;

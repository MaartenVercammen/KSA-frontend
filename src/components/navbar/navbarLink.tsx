import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  setMobileMenuOpen : (bool: boolean) => void,
  name : string,
  url: string,
};

function NavbarLink({ setMobileMenuOpen, name, url } : Props) {
  return (
    <li>
      <Link
        to={url}
        onClick={() => { setMobileMenuOpen(false); }}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavbarLink;

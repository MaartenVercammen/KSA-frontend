import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  setMobileMenuOpen : (bool) => void,
  name : string,
  url: string,
};

function NavbarLink({ setMobileMenuOpen, name, url } : Props) {
  const navigate = useNavigate();
  return (
    <li>
      <a
        onClick={() => {
          setMobileMenuOpen(false);
          navigate(url);
        }}
      >
        {name}
      </a>
    </li>
  );
}

export default NavbarLink;

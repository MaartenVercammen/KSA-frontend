import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  setnav : (bool) => void,
  name : string,
  url: string,
};

function NavbarLink({ setnav, name, url } : Props) {
  const navigate = useNavigate();
  return (
    <li>
      <a
        onClick={() => {
          setnav(false);
          navigate(url);
        }}
      >
        {name}
      </a>
    </li>
  );
}

export default NavbarLink;

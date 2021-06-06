import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/map">Map</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/my-nfts">My NFTS</NavLink>
        </li>

      </ul>



    </div>
  );
}

export default Navigation;

import React from 'react';

import logo_icon from '../assets/images/logo.png';
import user_icon from '../assets/images/user.png';
import cart_icon from '../assets/images/shopping_cart.png';

function TopHeader() {
  return (
    <div className='topheader'>
      <div className='logocontainer'>
        <img src={logo_icon} />
        Book Swarm
      </div>
      <div className='searchbar'>
        <input type='text' name='' id='' />
        <button>Search</button>
      </div>
      <div>
        <img src={user_icon} />
        <img src={cart_icon} />
      </div>
    </div>
  );
}

export default TopHeader;

import React from 'react';
import { Link } from 'dva/router';
import { Icon, NavBar } from 'antd-mobile';

const Nav = () => {
  return (
    <div>
      <NavBar
        icon={<Link to={'/'}><Icon type="left" /></Link>}
      >
        庆余年
      </NavBar>
    </div>
  );
};

export default Nav;

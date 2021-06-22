import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = ()=> {
	return (
		<div className={classes.navbar_block}>
			<div className={classes.navbar_links}>
				<NavLink to='/profile' activeClassName={classes.activeLink}>Моя страница</NavLink>
			</div>

			<div className={classes.navbar_links}>
				<NavLink to='/users' activeClassName={classes.activeLink}>Друзья</NavLink>
			</div>

			<div className={classes.navbar_links}>
				<NavLink to='/messages' activeClassName={classes.activeLink}>Мои сообщения</NavLink>
			</div>
		</div>
	);
}

export default Navbar;
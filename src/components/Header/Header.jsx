import React from 'react';
import classes from './Header.module.css';

const Header = (props)=> {
	return (
		<div className={classes.header_block}>
			<div className={classes.header_block_container}>
				{props.login != null ? 
					<div><p>{props.login}</p><button onClick={props.logout}>Выйти</button></div>
					:<div><p>Войти</p></div>
				}
			</div>
		</div>
	)
}

export default Header;
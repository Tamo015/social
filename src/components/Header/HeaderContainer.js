import React from 'react';
import Header from './Header';
import {logout} from '../../redux/reducers/authReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';


class HeaderContainer extends React.Component {
	render() {
		return (
			<Header 
				{...this.props}
				logout={this.props.logout}
			/>
		)
	}	
}

let mapStateToProps = (state)=> {
	return {
		id: state.auth.id,
		email: state.auth.email,
		login: state.auth.login,
		isAuth: state.auth.isAuth
	}
}

export default compose(
	connect(mapStateToProps, {logout})
)(HeaderContainer);
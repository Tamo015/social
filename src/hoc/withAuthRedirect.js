import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToRedirectProps = (state)=> {
	return {
		isAuth: state.auth.isAuth
	}
}


export const withAuthRedirectComponent = (Component)=> {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />
			return <Component {...this.props} />
		}
	}
	let ConnectRedirectComponent = connect(mapStateToRedirectProps)(RedirectComponent);
	return ConnectRedirectComponent;
}

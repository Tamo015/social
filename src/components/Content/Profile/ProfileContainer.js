import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {addPostInPage, onShowUser,getStatus,updateStatus} from '../../../redux/reducers/profileReducers';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = this.props.id;
			if(!userId) {
				this.props.history.push('/login');
			}
		}
		this.props.onShowUser(userId);
		this.props.getStatus(userId);
	}
	
	render() {
		return (
			<Profile 
				{...this.props}
				addPostInPage={this.props.addPostInPage}
				updateStatus={this.props.updateStatus}
			/>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		info: state.profilePage.info,
		posts: state.profilePage.posts,
		status: state.profilePage.status,
		id: state.auth.id,
		isAuth: state.auth.isAuth
	}
}



export default compose (
	connect(mapStateToProps, {addPostInPage, onShowUser, getStatus, updateStatus}),
	withRouter,
)(ProfileContainer)
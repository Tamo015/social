import React from 'react';
import Friends from './Friends';
import {connect} from 'react-redux';
import {getUsers, setCurrentPage, subscribe, unsubscribe} from '../../../redux/reducers/friendsReducer'
import Preloader from '../../common/Preloader/Preloader';
import {compose} from 'redux';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';

class FriendsContainer extends React.Component {
	componentDidMount () {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	
	onChangePage = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}
	
	render() {
		return (
			<>
			{this.props.isFetching ? <Preloader />:null}
			<Friends 
					{...this.props}
					onChangePage={this.onChangePage}
					subscribe={this.props.subscribe}
					unsubscribe={this.props.unsubscribe}
					isFetching={this.props.isFetching}
			/>
		</>
		)
	}
}

let mapStateToProps = (state)=> {
	return {
		users: state.friendsPage.users,
		totalCount: state.friendsPage.totalCount,
		pageSize: state.friendsPage.pageSize,
		currentPage: state.friendsPage.currentPage,
		isFetching: state.friendsPage.isFetching,
		isProgress: state.friendsPage.isProgress
	}
}

export default compose(
	connect(mapStateToProps, {getUsers,setCurrentPage, subscribe, unsubscribe}),
	withAuthRedirectComponent
)(FriendsContainer)

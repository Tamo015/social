import React from 'react';
import {sendMessage} from '../../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';



class DialogsContainer extends React.Component {
	render() {
		return (
			<Dialogs {...this.props} sendMessage={this.props.sendMessage} />
		)
	}
}

let mapStateToProps = (state)=> {
	return {
		message: state.dialogs.message,
		date: state.dialogs.date
	}
}


export default compose(
	connect(mapStateToProps, {sendMessage}),
	withAuthRedirectComponent
)(DialogsContainer);

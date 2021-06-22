import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  
  state = {
	  editMode:false,
	  status:this.props.status
  }
  
  activeStatus = () => {
	this.setState({
		editMode:true
	});
  }
  
  deactiveStatus = () => {
	this.setState({
		editMode:false
	});
	this.props.updateStatus(this.state.status)
  }
  
  onChangeStatus = (e)=> {
	  this.setState({
		  status: e.currentTarget.value
	  });
  }
  
  componentDidUpdate(prevProps, prevState) {
	if(prevProps.status !== this.props.status) {
		this.setState({
			status: this.props.status
		})
	}
  
  }
  
  render() {
	  return (
		  <div>
		  {!this.state.editMode &&
			<div>
				<span onDoubleClick={this.activeStatus}>{this.state.status === '' ? '-----' : this.state.status}</span>
			</div>
		  }
		  {this.state.editMode &&
			<div>
				<input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.deactiveStatus} value={this.state.status} />
			</div>
		  }
		  </div>
	  );
  }
}

export default ProfileStatus;

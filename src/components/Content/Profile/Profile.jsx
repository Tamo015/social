import React from 'react';
import classes from './Profile.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import {Field, reduxForm} from 'redux-form';
import {required, MaxLengthMessage} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormControls';


const maxLengthMessage50 = MaxLengthMessage(50);

const ProfileForm = (props)=> {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field validate={[required, maxLengthMessage50]} component={Textarea} name='postsField' placeholder='Enter message' />
			<button>Add Post</button>
		</form>
	)
}

const PostsReduxForm = reduxForm({form:'postsReduxForm'})(ProfileForm);


const Profile = (props) => {

  const userInfo = props.info.map(elem => {
	return <div>
		<div className={classes.profile_image_info}>
			<img className={classes.profile_img} src={elem.photos.large != null ? elem.photos.large : 'https://zastavok.net/ts/strany/158531196454.jpg'} />
		</div>
		<h3><span>Name: {elem.fullName}</span></h3>
	</div>
  });
  
  const newPosts = props.posts.map(elem => {
		return <div>
			<p><b>Post: </b> {elem.post}</p>
		</div>
  });
  
  const onSubmit = (formData)=> {
	  props.addPostInPage(formData.postsField);
  }
  
  return (
    <div className={classes.profile_block}>
		
		<div className={classes.profile_wrapper}>
			<div className={classes.profile_info}>
				{userInfo}
			</div>
		</div>
		
		<div className={classes.profile_posts}>
			<PostsReduxForm onSubmit={onSubmit} />
			<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
		</div>
		
		<div>
			{newPosts}
		</div>
    </div>
  );
}

export default Profile;

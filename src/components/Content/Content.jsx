import React from 'react';
import classes from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import FriendsContainer from './Friends/FriendsContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import Login from '../Login/Login';

const Content = () => {
  return (
    <div className={classes.content_block}>
		<Route path='/profile/:userId?' render={()=> <ProfileContainer /> } />
		<Route path='/users' render={()=> <FriendsContainer /> } />
		<Route path='/login' render={()=> <Login />} />
		<Route path='/messages' render={()=> <DialogsContainer />} />
    </div>
  );
}

export default Content;

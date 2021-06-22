import {usersAPI} from '../../api/api';
import {profileAPI} from '../../api/api';

const ADD_POST_IN_PAGE = 'ADD_POST_IN_PAGE';
const SHOW_USER = 'SHOW_USER';
const SET_STATUS = 'SET_STATUS';

const initialState = {
	info: [
		{
			fullname:'Tamik', 
			photos: {
				large:null
			}
		}
	],
	posts: [],
	status:''
}

const profileReducers = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST_IN_PAGE:
			return {
				...state,
				posts: [
					...state.posts,
					{post: action.text}
				],
			}
		case SHOW_USER:
			return {
				...state,
				info: [action.items]
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state;
	}
}

export const addPostInPage = (text)=> ({type:ADD_POST_IN_PAGE, text})
export const changeProfile = (items)=> ({type:SHOW_USER, items})
export const setStatus = (status)=> ({type:SET_STATUS, status})

export const onShowUser = (userId) => {
	return (dispatch)=> {
		usersAPI.getProfile(userId).then(data => {
			dispatch(changeProfile(data));
		});
	}
}

export const getStatus = (userId)=> (dispatch)=> {
	profileAPI.getStatus(userId).then(response => {
		dispatch(onShowUser(userId));
	});
}

export const updateStatus = (status)=> (dispatch)=> {
	profileAPI.updateStatus(status).then(response => {
		if(response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
}


export default profileReducers;
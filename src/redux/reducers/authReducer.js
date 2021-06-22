import {authAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';

const SET_LOGIN = 'SET_LOGIN';


let initialState = {
	id: null,
	login:null,
	email: null,
	isAuth:false
}


const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_LOGIN:
			return {
				...state,
				...action.data,
			}
		default:
			return state
	}
}

export const confirmLogin = (id,login,email,isAuth) => ({type:SET_LOGIN, data:{id,login,email,isAuth}});

export const getUsersData = ()=> (dispatch) => {
		return authAPI.me().then(response => {
			if(response.data.resultCode === 0) {
				let {id,login,email} = response.data.data;
				dispatch(confirmLogin(id,login,email, true));
			}
		});
}


export const login = (email, password, rememberMe)=> (dispatch) => {
	authAPI.login(email, password, rememberMe).then(response => {
		if(response.data.resultCode === 0) {
			dispatch(getUsersData());
		}else{
			let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
			dispatch(stopSubmit('authorizationForm', {_error:message}));
		}
	});
}

export const logout = ()=> (dispatch) => {
	authAPI.logout().then(response => {
		if(response.data.resultCode === 0) {
			dispatch(confirmLogin(null, null, null, false));
		}
	});
}

export default authReducer
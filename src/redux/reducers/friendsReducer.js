import {usersAPI} from '../../api/api';

const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SHOW_BUTTON_DELETE = 'SHOW_BUTTON_DELETE';
const SHOW_BUTTON_ADD = 'SHOW_BUTTON_ADD';
const SET_CHANGE_STATE = 'SET_CHANGE_STATE';
const SHOW_PRELOADER = 'SHOW_PRELOADER';

const initialState = {
	users:[],
	totalCount:0,
	currentPage:1,
	pageSize:5,
	isFetching:false,
	isProgress: []
}

const friendsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USERS:
			return {
				...state,
				users: [...action.users]
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount
			}
		case SHOW_PRELOADER:
			return {
				...state,
				isFetching: action.bool
			}
		case SHOW_BUTTON_DELETE:
			return {
				...state,
				users: state.users.map(elem => {
					if(elem.id === action.userId) {
						return {
							...elem,
							followed:true
						}
					}
					return elem;
				})
			}
		case SHOW_BUTTON_ADD:
			return {
				...state,
				users: state.users.map(elem => {
					if(elem.id === action.userId) {
						return {
							...elem,
							followed:false
						}
					}
					return elem;
				})
			}
		case SET_CHANGE_STATE:
			return {
				...state,
				isProgress: action.bool ? [...state.isProgress, action.userId] : state.isProgress.filter(id => id != action.userId)
			}
		default:
			return state
	}
}

export const setUsers = (users)=> ({type:SET_USERS, users});
export const setTotalCount = (totalCount)=> ({type:SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage)=> ({type:SET_CURRENT_PAGE, currentPage});
export const onChangeStateButton = (bool, userId)=> ({type:SET_CHANGE_STATE, bool, userId});
export const subscribeSuccess = (userId)=> ({type:SHOW_BUTTON_DELETE, userId});
export const unsubscribeSuccess = (userId)=> ({type:SHOW_BUTTON_ADD, userId});
export const toggleIsFetching = (bool)=> ({type:SHOW_PRELOADER, bool});

export const getUsers = (currentPage, pageSize)=> {
	return (dispatch)=> {
		dispatch(toggleIsFetching(true));
		
		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setTotalCount(data.totalCount));
			dispatch(setUsers(data.items));
		});
	}
}

export const subscribe = (userId)=> {
	return (dispatch) => {
		dispatch(onChangeStateButton(true, userId));
		
		usersAPI.changeState(userId).then(data=> {
			if(data.resultCode === 0) {
				dispatch(subscribeSuccess(userId));
				dispatch(onChangeStateButton(false, userId));
			}
		});
		
	}
}

export const unsubscribe = (userId)=> {
	return (dispatch) => {
		dispatch(onChangeStateButton(true, userId));
		
		usersAPI.changeState(userId).then(data=> {
			if(data.resultCode === 0) {
				dispatch(unsubscribeSuccess(userId));
				dispatch(onChangeStateButton(false, userId));
			}
		});
	}
}

export default friendsReducer;
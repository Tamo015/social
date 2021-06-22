import {getUsersData} from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
	initialized: false
}


const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized:true
			}
		default:
			return state
	}
}

export const setInitialazed = ()=> ({type:SET_INITIALIZED})

export const loginProcess = ()=> (dispatch)=> {
	let promise = dispatch(getUsersData());
	
	Promise.all([promise]).then((response)=> {
		dispatch(setInitialazed());
	});
	
}

export default appReducer;
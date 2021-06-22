const ADD_MESSAGE_IN_STATE = 'ADD_MESSAGE_IN_STATE';

const initialState = {
	message: [],
	date: new Date()
}

const dialogsReducers = (state = initialState, action) => {
	switch(action.type) {
		case ADD_MESSAGE_IN_STATE:
			return {
				...state,
				message: [...state.message, action.text]
			}
		default:
			return state;
	}
}


export const addMessageInState = (text) => ({type:ADD_MESSAGE_IN_STATE, text});

export const sendMessage = (text) => (dispatch) => {
	dispatch(addMessageInState(text));
}

export default dialogsReducers;
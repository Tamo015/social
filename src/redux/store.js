import {createStore, applyMiddleware, combineReducers} from 'redux';
import profileReducers from './reducers/profileReducers';
import friendsReducer from './reducers/friendsReducer';
import dialogsReducer from './reducers/dialogsReducer';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers ({
	profilePage: profileReducers,
	friendsPage: friendsReducer,
	auth: authReducer,
	app: appReducer,
	dialogs: dialogsReducer,
	form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
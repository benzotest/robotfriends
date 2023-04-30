import {CHANGE_SEARCHFIELD} from './constants.js';
import {REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL,
	REQUEST_ROBOTS_PENDING} from './constants.js';

const initialState1 = {
	searchField: ""
}

export const searchRobots = (state=initialState1, action ={})=>{
	switch(action.type){
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state, {searchField: action.payload})
		default:
			return state
	}
}

const initialState2 = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialState2, action={})=>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {isPending: false, robots: action.payload})
		case REQUEST_ROBOTS_FAIL:
			return Object.assign({}, state, {isPending: false, error: action.payload})
		default:
			return state
	}
}

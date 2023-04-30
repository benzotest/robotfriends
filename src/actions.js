import {CHANGE_SEARCHFIELD} from './constants.js';
import {REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL,
	REQUEST_ROBOTS_PENDING} from './constants.js';

export const setSearchField = (text) => {
	return({
		type: CHANGE_SEARCHFIELD,
		payload: text
	})
}

export const requestRobots = (dispatch)=>{
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch("https://jsonplaceholder.typicode.com/users")
	.then((res)=>{
		return res.json()
	})
	.then((res)=>{
		dispatch({
			type: REQUEST_ROBOTS_SUCCESS,
			payload: res
		})
	})
	.catch((res)=>{
		dispatch({
			type: REQUEST_ROBOTS_FAIL,
			payload: res
		})
	})
}

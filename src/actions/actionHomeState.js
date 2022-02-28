import * as api from '../api/ApiConnectionSettings.js'
import { SET_HOME_STATE, DEFAULT_HOME_STATE } from '../constants/constants.js'
export const setHomeState = (statedata) => async (dispatch) => {
	try {
		dispatch({
			type: SET_HOME_STATE,
			payload: statedata,
		})
	} catch (error) {
		console.error(error)
	}
}

export const getHomeState = async () => {
	try {
		const data = api.fetchHomeData()
		return data
	} catch (error) {
		console.error(error)
	}
}

export const defaultHomeState = () => async (dispatch) => {
	try {
		dispatch({
			type: DEFAULT_HOME_STATE,
		})
	} catch (error) {
		console.error(error)
	}
}

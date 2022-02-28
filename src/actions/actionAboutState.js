import * as api from '../api/ApiConnectionSettings.js'
import { SET_ABOUT_STATE, DEFAULT_ABOUT_STATE } from '../constants/constants.js'
export const setAboutState = (statedata) => async (dispatch) => {
	try {
		dispatch({
			type: SET_ABOUT_STATE,
			payload: statedata,
		})
	} catch (error) {
		console.error(error)
	}
}

export const getAboutState = async () => {
	try {
		const data = api.fetchAboutData()
		return data
	} catch (error) {
		console.error(error)
	}
}

export const defaultAboutState = () => async (dispatch) => {
	try {
		dispatch({
			type: DEFAULT_ABOUT_STATE,
		})
	} catch (error) {
		console.error(error)
	}
}

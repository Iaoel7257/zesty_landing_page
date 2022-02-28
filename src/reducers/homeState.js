import { SET_HOME_STATE, DEFAULT_HOME_STATE } from '../constants/constants'

const homeState = [] //empty array

export default function HomeState(HomeState = homeState, action) {
	switch (action.type) {
		case SET_HOME_STATE:
			const dataObj = action.payload
			return dataObj
		case DEFAULT_HOME_STATE:
			return homeState
		default:
			return HomeState
	}
}

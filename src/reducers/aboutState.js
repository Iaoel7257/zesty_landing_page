import { SET_ABOUT_STATE, DEFAULT_ABOUT_STATE } from '../constants/constants'

const aboutState = [] //empty array

export default function AboutState(AboutState = aboutState, action) {
	switch (action.type) {
		case SET_ABOUT_STATE:
			const dataObj = action.payload
			return dataObj
		case DEFAULT_ABOUT_STATE:
			return aboutState
		default:
			return AboutState
	}
}

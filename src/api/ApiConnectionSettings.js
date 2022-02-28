import { toast } from 'react-toastify'
const axios = require('axios')

const BASE_URL = 'https://www.zesty.io/-/'
const HOME_URL = `gql/platform_section.json`
const ABOUT_URL = `instant/7-e93178-vqvclg.json`

const toastErrHome = () => toast.error('No Home Data Found')
const toastErrAbout = () => toast.error('No About Data Found')

export const fetchHomeData = async () => {
	try {
		const endPoint = `${BASE_URL}${HOME_URL}`
		const res = await axios.get(`${endPoint}`)
		const { data: payload } = res
		const ret = payload.map((data, idx) => {
			const { title, text_content } = data
			const id = idx
			return { title, text_content, id }
		})
		return ret
	} catch (err) {
		toastErrHome()
		console.error(err)
	}
}
export const fetchAboutData = async () => {
	try {
		const endPoint = `${BASE_URL}${ABOUT_URL}`
		const res = await axios.get(`${endPoint}`)
		const { data: payload } = res
		const { data } = payload
		const ret = data.map(({ content }, idx) => {
			const { page_content, hero_content } = content
			return { page_content, hero_content }
		})
		return ret
	} catch (err) {
		toastErrAbout()
		console.error(err)
	}
}

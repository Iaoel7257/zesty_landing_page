import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Redux
import { useDispatch } from 'react-redux'
// actions
import * as actionHome from './actions/actionHomeState'
import * as actionAbout from './actions/actionAboutState'
// Components
import DefaultTheme from './DefaultTheme'
import Home from './Components/Home'
import About from './Components/About'
import Navigation from './Navigation/Navigation'

export default function App() {
	const dispatch = useDispatch()
	const [homeStateData, setHomeStateData] = useState([])
	const [aboutStateData, setAboutStateData] = useState([])

	useEffect(() => {
		Promise.all([
			promiseConstructor(
				actionHome
					.getHomeState()
					.then((response) => setHomeStateData(response))
					.catch((err) => console.error(err)),
			),
			promiseConstructor(
				actionAbout
					.getAboutState()
					.then((response) => setAboutStateData(response))
					.catch((err) => console.error(err)),
			),
		])
	}, [dispatch])

	useEffect(() => {
		dispatch(actionHome.setHomeState(homeStateData))
	}, [homeStateData, dispatch])
	useEffect(() => {
		dispatch(actionAbout.setAboutState(aboutStateData))
	}, [aboutStateData, dispatch])

	return (
		<>
			<div>
				<Router basename={process.env.PUBLIC_URL}>
					<DefaultTheme>
						<Navigation />
					</DefaultTheme>
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/About' exact>
							<About />
						</Route>
						<Route path='/Products' exact>
							<h2>On Construction</h2>
						</Route>
						<Route path='/Pricing' exact>
							<h2>On Construction</h2>
						</Route>
						<Route path='/Blog' exact>
							<h2>On Construction</h2>
						</Route>
					</Switch>
				</Router>

				<ToastContainer autoClose={5000} />
			</div>
		</>
	)
}

function promiseConstructor(param) {
	return new Promise((resolve, reject) => {
		resolve(param)
	})
}

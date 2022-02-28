import React, { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import ParseContent from './HtmlParser'
import styles from './homeStyle.module.css'

export default function Home(props) {
	const homeDataState = useSelector((state) => state.HomeState)
	const [homeData, setHomeData] = useState([])

	useLayoutEffect(() => {
		setHomeData([...homeDataState])
	}, [homeDataState])

	return (
		<>
			{homeData.map(({ title, text_content, id }, idx) => {
				return (
					<div key={id} className={styles.container}>
						<h1 className={styles.title}>{title}</h1>
						<ParseContent content={text_content} />
					</div>
				)
			})}
		</>
	)
}

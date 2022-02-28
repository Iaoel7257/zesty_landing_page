import React, { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import ParseContent from './HtmlParser'
import styles from './aboutStyle.module.css'

export default function About(props) {
	const aboutDataState = useSelector((state) => state.AboutState)
	const [aboutData, setAboutData] = useState([])

	useLayoutEffect(() => {
		setAboutData([...aboutDataState])
	}, [aboutDataState])

	return (
		<>
			{aboutData.map(({ hero_content, page_content }, idx) => {
				return (
					<div key={idx} className={styles.container}>
						<ParseContent>{hero_content}</ParseContent>
						<ParseContent content={page_content} />
					</div>
				)
			})}
		</>
	)
}

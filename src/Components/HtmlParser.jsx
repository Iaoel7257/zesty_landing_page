import React from 'react'
import HTMLParser from 'html-react-parser'
import DOMPurify from 'dompurify'
export default function Htmlparser(props) {
	const { content } = props
	// I use HTML Parser with DOM purify to prevent XSS attack "Security Issue might arise in the future"
	// And this would avoid any technical Debt
	return <>{content && HTMLParser(DOMPurify.sanitize(content))}</>
}

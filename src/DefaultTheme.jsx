import { createTheme, ThemeProvider } from '@mui/material/styles'

import React from 'react'
const Theme = createTheme({
	palette: {
		primary: {
			main: '#1b202c',
		},
		secondary: {
			main: '#2B8000',
		},
		action: {
			disabledBackground: '#fff',
			disabled: '#fff',
		},
	},
})

export const DefaultTheme = (props) => {
	return <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
}

export default DefaultTheme

import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// Mount function to start up the app
const mount = (el: any, { onNavigate, defaultHistory, initialPath }: any) => {
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath],
		})
	if (onNavigate) {
		history.listen(onNavigate)
	}

	ReactDOM.render(<App history={history} />, el)

	return {
		onParentNavigate({ pathname: nextPathname }: any) {
			const { pathname } = history.location
			if (pathname !== nextPathname) {
				console.log(pathname, nextPathname)
				history.push(nextPathname)
			}
		},
	}
}

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.getElementById('root')
	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() })
	}
}

// we are running through container
// and we should export the mount function
export { mount }

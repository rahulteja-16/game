import * as React from 'react'
import type { BrowserHistory } from 'history'
import { Router } from 'react-router-dom'

export interface HistoryRouterProps {
	history: BrowserHistory
	children?: React.ReactNode
}

export function HistoryRouter({ children, history }: HistoryRouterProps) {
	const [state, setState] = React.useState({
		action: history.action,
		location: history.location,
	})

	React.useLayoutEffect(() => history.listen(setState), [history])

	return (
		<Router
			location={state.location}
			navigationType={state.action}
			navigator={history}
		>
			{children}
		</Router>
	)
}

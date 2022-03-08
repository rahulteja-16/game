import GlobalStyles from './Styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import BattleContainer from './Containers/BattleContainer'
import PlayContainer from './Containers/PlayContainer'
import NotFound from './Containers/NotFound'
import { Choices } from './types'
import useLocalStorage from './Hooks/useLocalStorage'
import { HistoryRouter } from './HistoryRouter'

const App = ({ history }: any) => {
	const [score, setScore] = useLocalStorage('score', 0)
	const [userChoice, setUserChoice] = useState<Choices>(Choices.DEFAULT)

	const updateUser = (choice: Choices) => {
		setUserChoice(choice)
		history.push('/game/battle')
	}

	return (
		<>
			<GlobalStyles />
			<HistoryRouter history={history}>
				<Routes>
					<Route
						path="/game"
						element={
							<PlayContainer
								updateUserChoice={updateUser}
								score={score}
								setScore={setScore}
							/>
						}
					/>
					<Route
						path="/game/battle"
						element={
							<BattleContainer
								score={score}
								setScore={setScore}
								userChoice={userChoice}
							/>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</HistoryRouter>
		</>
	)
}

export default App

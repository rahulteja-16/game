import GlobalStyles from './Styles/GlobalStyles'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import BattleContainer from './Containers/BattleContainer'
import PlayContainer from './Containers/PlayContainer'
import NotFound from './Containers/NotFound'
import { Choices } from './types'
import useLocalStorage from './Hooks/useLocalStorage'

const App = () => {
	const navigate = useNavigate()
	const [score, setScore] = useLocalStorage('score', 0)
	const [userChoice, setUserChoice] = useState<Choices>(Choices.DEFAULT)

	const updateUser = (choice: Choices) => {
		setUserChoice(choice)
		navigate('/battle')
	}

	return (
		<>
			<GlobalStyles />
			<Routes>
				<Route
					path="/"
					element={
						<PlayContainer
							updateUserChoice={updateUser}
							score={score}
							setScore={setScore}
						/>
					}
				/>
				<Route
					path="/battle"
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
		</>
	)
}

export default App

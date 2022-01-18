import '@testing-library/jest-dom'
import { BattleContainerProps, Choices } from '../../types'
import { render, screen } from '@testing-library/react'
import BattleContainer from '.'
import { BrowserRouter } from 'react-router-dom'

const initialProps: BattleContainerProps = {
	score: 10,
	userChoice: Choices.LIZARD,
	setScore: () => null,
}

describe('Battle Container', () => {
	it('Should Render Score Card Component in Battle Container', () => {
		render(
			<BrowserRouter>
				<BattleContainer {...initialProps} />
			</BrowserRouter>
		)
		expect(screen.getByTestId('score-card-test')).toBeInTheDocument()
	})

	it('Should Render Footer Component in Battle Container', () => {
		render(
			<BrowserRouter>
				<BattleContainer {...initialProps} />
			</BrowserRouter>
		)
		expect(screen.getByTestId('footer-test')).toBeInTheDocument()
	})

	it('Should Render Battle Section', () => {
		render(
			<BrowserRouter>
				<BattleContainer {...initialProps} />
			</BrowserRouter>
		)
		expect(screen.getByTestId('battle-test')).toBeInTheDocument()
	})

	it('Should Render Battle Section', () => {
		render(
			<BrowserRouter>
				<BattleContainer {...initialProps} />
			</BrowserRouter>
		)
		expect(screen.getByTestId('battle-result')).toBeInTheDocument()
	})
})

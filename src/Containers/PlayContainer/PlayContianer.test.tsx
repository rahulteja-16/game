import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PlayContainer from '.'
import { PlayContainerProps } from '../../types'

const initialProps: PlayContainerProps = {
	score: 10,
	setScore: () => null,
	updateUserChoice: () => null,
}

describe('Play Container', () => {
	it('Should Render Score Card Component', () => {
		render(<PlayContainer {...initialProps} />)
		expect(screen.getByTestId('score-card-test')).toBeInTheDocument()
	})

	it('Should Render Footer Component', () => {
		render(<PlayContainer {...initialProps} />)
		expect(screen.getByTestId('footer-test')).toBeInTheDocument()
	})

	it('Should have img alt text for pentagon', () => {
		render(<PlayContainer {...initialProps} />)
		const logo = screen.getByTestId('pentagon-image')
		expect(logo).toHaveAttribute('alt', 'Pentagon')
	})

	it('Should render Choice Selector 5 times', async () => {
		render(<PlayContainer {...initialProps} />)
		const choiceSelectors = await screen.findAllByTestId(
			'choice-selector-test'
		)
		expect(choiceSelectors.length).toBe(5)
	})
})

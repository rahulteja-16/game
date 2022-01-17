import '@testing-library/jest-dom'
import { render, within } from '@testing-library/react'
import ScoreCard from '.'
import { ScoreCardProps } from '../../types'

const initialProps: ScoreCardProps = {
	score: 11,
}

describe('Score Card Component', () => {
	it('Should render Score in span', async () => {
		const { findAllByTestId } = render(<ScoreCard {...initialProps} />)
		const gameAttributes = await findAllByTestId('game-text')
		expect(gameAttributes.length).toBe(5)
	})

	it('Should render game attributes', () => {
		const { getByTestId } = render(<ScoreCard {...initialProps} />)
		const { getByText } = within(getByTestId('score-text'))
		expect(getByText('Score')).toBeInTheDocument()
	})

	it('Should Render Score', () => {
		const { getByTestId } = render(<ScoreCard {...initialProps} />)
		const { getByText } = within(getByTestId('score-value'))
		expect(getByText('11')).toBeInTheDocument()
	})

	it('Should Append 0 if score is less than 10', () => {
		const props = { ...initialProps }
		props.score = 5
		const { getByTestId } = render(<ScoreCard {...props} />)
		const { getByText } = within(getByTestId('score-value'))
		expect(getByText('05')).toBeInTheDocument()
	})

	it('Should render negative values', () => {
		const props = { ...initialProps }
		props.score = -1
		const { getByTestId } = render(<ScoreCard {...props} />)
		const { getByText } = within(getByTestId('score-value'))
		expect(getByText('-1')).toBeInTheDocument()
	})
})

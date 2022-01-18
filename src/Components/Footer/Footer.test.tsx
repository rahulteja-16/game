import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '.'
import { FooterProps } from '../../types'

const initialProps: FooterProps = {
	onUpdateScore: () => null,
}

describe('Footer Component', () => {
	it('Should Render Component', () => {
		const { getByTestId } = render(<Footer {...initialProps} />)
		expect(getByTestId('footer-test')).toBeInTheDocument()
	})
	it('Should render Rules and Reset Buttons', async () => {
		render(<Footer {...initialProps} />)
		const btnCount = await screen.getAllByTestId('button-test')
		expect(btnCount.length).toBe(2)
	})
})

import { render } from '@testing-library/react'
import Footer from '.'
import { FooterProps } from '../../types'

const initialProps: FooterProps = {
	onUpdateScore: () => null,
}

describe('Footer Component', () => {
	it('Should render Rules and Reset Buttons', () => {
		render(<Footer {...initialProps} />)
	})
})

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '.'
import { TEXT } from '../../constants'

describe('Not Found Component', () => {
	it('Should Render 404 Error', () => {
		render(
			<BrowserRouter>
				<NotFound />
			</BrowserRouter>
		)
		expect(screen.getByText(TEXT.Status404)).toBeInTheDocument()
		expect(screen.getByText(TEXT.Error404)).toBeInTheDocument()
	})

	it('Image should have alt text', () => {
		render(
			<BrowserRouter>
				<NotFound />
			</BrowserRouter>
		)
		const logo = screen.getByTestId('404-image')
		expect(logo).toHaveAttribute('alt', TEXT.LOGO)
	})
})

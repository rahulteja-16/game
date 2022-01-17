import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from '.'
import { ButtonPros } from '../../types'

const initialProps: ButtonPros = {
	aria: 'Hello',
	text: 'Hello',
	onBtnClick: () => null,
}
describe('Button Component', () => {
	it('Should render button label', () => {
		render(<Button {...initialProps} />)
		expect(screen.getByRole('button', { name: 'Hello' })).toBeInTheDocument()
	})

	it('Button should be clickable', () => {
		const mockOnClick = jest.fn()
		const props = { ...initialProps }
		props.onBtnClick = mockOnClick
		const { getByTestId } = render(<Button {...props} />)

		const btnClick = getByTestId('button-test')
		fireEvent.click(btnClick)

		expect(mockOnClick).toHaveBeenCalledTimes(1)
	})
})

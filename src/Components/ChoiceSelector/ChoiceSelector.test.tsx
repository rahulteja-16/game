import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ChoiceSelector from '.'
import { Choices, ChoiceSelectorProps } from '../../types'

const initialProps: ChoiceSelectorProps = {
	choice: Choices.LIZARD,
	updateUserChoice: () => null,
}

describe('Choice Selector Component', () => {
	it('Should Render Choice Selector Component', () => {
		const { getByTestId } = render(<ChoiceSelector {...initialProps} />)
		expect(getByTestId('choice-selector-test')).toBeInTheDocument()
	})

	it('Choice Selector Button Should be clickable', () => {
		const updateUserChoice = jest.fn()
		const props = { ...initialProps }
		props.updateUserChoice = updateUserChoice
		render(<ChoiceSelector {...props} />)
		fireEvent.click(screen.getByRole('button'))
		expect(updateUserChoice).toBeCalledTimes(1)
	})
})

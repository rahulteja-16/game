import { render } from '@testing-library/react'
import ChoiceSelector from '.'
import { Choices, ChoiceSelectorProps } from '../../types'

const initialProps: ChoiceSelectorProps = {
	choice: Choices.LIZARD,
	updateUserChoice: () => null,
}

it('Render Choice Selector', () => {
	render(<ChoiceSelector {...initialProps} />)
})

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Modal from '.'

describe('Modal Component', () => {
	it('Should Render Modal', () => {
		const handleToggle = jest.fn()
		render(<Modal toggle={handleToggle} />)
	})
})

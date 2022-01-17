import { useState } from 'react'
import { ARIA, TEXT } from '../../constants'
import { FooterProps } from '../../types'
import Button from '../Button'
import Modal from '../Modal'
import { FooterWrapper } from './style'

const Footer = ({ onUpdateScore }: FooterProps) => {
	const [modal, setModal] = useState(false)
	const toggleModal = () => {
		setModal(!modal)
	}
	return (
		<>
			<FooterWrapper data-testid="footer-test">
				<Button
					aria={ARIA.rules}
					text={TEXT.rules}
					onBtnClick={toggleModal}
				/>
				<Button
					aria={ARIA.resetScore}
					text={TEXT.reset}
					onBtnClick={() => onUpdateScore(0)}
				/>
			</FooterWrapper>
			{modal ? <Modal toggle={toggleModal} /> : null}
		</>
	)
}

export default Footer

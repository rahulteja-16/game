import ReactDOM from 'react-dom'
import close from '../../../images/icon-close.svg'
import rules from '../../../images/image-rules-bonus.svg'
import { ARIA, TEXT } from '../../constants'
import { ToggleProps } from '../../types'
import {
	ModalBox,
	ModalButton,
	ModalButtonWrapper,
	ModalContainer,
	ModalH1,
	ModalHeader,
	ModalImg,
} from './style'

const Modal = ({ toggle }: ToggleProps) => {
	const overlayRootEl = document.querySelector('#modal')
	return overlayRootEl
		? ReactDOM.createPortal(
				<ModalContainer data-testid="modal-test">
					<ModalBox>
						<ModalHeader>
							<ModalH1>{TEXT.rules}</ModalH1>
						</ModalHeader>
						<ModalImg src={rules} alt={TEXT.rules} />
						<ModalButtonWrapper>
							<ModalButton
								aria-label={ARIA.closeRules}
								onClick={toggle}
								data-testid="close-modal"
							>
								<ModalImg src={close} alt={TEXT.close} />
							</ModalButton>
						</ModalButtonWrapper>
					</ModalBox>
				</ModalContainer>,
				overlayRootEl
		  )
		: null
}

export default Modal

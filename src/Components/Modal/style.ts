import styled from 'styled-components'
import devices from '../../devices'

export const ModalContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgb(1 7 12 / 60%);
`

export const ModalBox = styled.div`
	color: var(--dark-text);
	background-color: var(--white);
	border-radius: var(--border-radius-modal);
	padding: var(--padding-l);

	@media ${devices.mobile} {
		height: 100vh;
	}
`

export const ModalHeader = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
	@media ${devices.mobile} {
		margin-top: 12vh;
	}
`
export const ModalH1 = styled.h1`
	text-transform: uppercase;
	margin: 0;
	padding: 0;
`

export const ModalButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5vh;
`

export const ModalButton = styled.button`
	background: none;
	border: none;
	align-self: center;
	color: var(--dark-text);

	&:hover {
		cursor: pointer;
	}
`

export const ModalImg = styled.img`
	width: 100%;

	@media ${devices.mobile} {
		margin-top: 6vh;
	}
`

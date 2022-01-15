import styled from 'styled-components'
import devices from '../../devices'

export const ButtonWrapper = styled.button`
	padding: var(--padding-xs) var(--padding-l);
	border-radius: var(--border-radius-s);
	border: var(--border) solid var(--header-outline);
	color: var(--white);
	background: none;
	font-weight: var(--font-w500);

	@media ${devices.desktop} {
		margin-right: var(--spacing);
	}

	@media ${devices.monitor} {
		margin-right: var(--spacing);
	}
`

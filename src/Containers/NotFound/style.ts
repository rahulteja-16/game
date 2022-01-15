import styled from 'styled-components'
import devices from '../../devices'

export const NotFoundWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30vh;

	@media ${devices.mobile} {
		flex-wrap: wrap;
		margin-top: 10vh;
	}
`
export const Img = styled.img`
	width: 300px;
`
export const ContentWrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: space-evenly;
	margin-left: 5rem;
	@media ${devices.mobile} {
		margin-left: 0;
	}
`
export const ErrorSpan = styled.span`
	font-size: 9rem;
	letter-spacing: var(--letter-spacing-m);
`

export const ErrorMessageSpan = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-s);
	margin-bottom: 2vh;
`

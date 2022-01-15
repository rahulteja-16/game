import styled from 'styled-components'
import devices from '../../devices'

export const HeaderWrapper = styled.header`
	grid-area: header;
	display: flex;
	justify-content: center;

	@media ${devices.desktop} {
		display: initial;
	}
`

export const CenterPosition = styled.div`
	display: flex;
	border: var(--border) solid var(--header-outline);
	width: 100%;
	border-radius: var(--border-radius-m);
	display: flex;
	justify-content: space-between;
	padding: var(--padding-s);
	margin: 1rem;

	@media ${devices.mobile} {
		margin: 1rem 0.75rem 0rem 0.75rem;
	}
`

export const TextWrapper = styled.div`
	font-size: 1.5rem;
	text-transform: uppercase;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	line-height: 1.3rem;
`

export const ScoreBox = styled.div`
	padding: var(--spacing) 2.5rem;
	background-color: var(--white);
	color: var(--score-text);
	border-radius: var(--border-radius-s);
`

export const ScoreValue = styled.div`
	color: var(--dark-text);
	font-size: 3.5rem;
	font-weight: var(--font-w700);
`

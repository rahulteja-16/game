import styled from 'styled-components'
import devices from '../../devices'

export const BattleSection = styled.section`
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-template-columns: 1fr;
	grid-template-areas: 'header' 'battle' 'result' 'footer';

	@media ${devices.desktop} {
		grid-template-columns: 20vw auto auto auto 20vw;
		grid-template-areas:
			'. header header header .'
			'. battle battle battle .'
			'. result result result .'
			'footer footer footer footer footer ';
	}

	@media ${devices.monitor} {
		grid-template-columns: auto 260px 260px 260px auto;
		grid-template-areas:
			'. header header header .'
			'. battle battle battle .'
			'. result result result .'
			'. footer footer footer . ';
	}
`

export const BattleWrapper = styled.div`
	grid-area: battle;
	display: flex;
	justify-content: space-around;
	margin: 12vh 0 8vh 0;
`

export const BattleResult = styled.div`
	grid-area: result;
`

export const ItemWrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
`
export const TextWrapper = styled.div`
	margin-top: 5vh;
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-s);
	font-size: var(--font-xs);
`

export const ResultText = styled.div`
	display: flex;
	justify-content: center;
	font-size: var(--font-l);
	letter-spacing: var(--letter-spacing-s);
	font-weight: var(--font-w700);
`

export const PlayAgainWrapper = styled.div`
	padding: var(--padding-s);
	display: flex;
	justify-content: center;
	margin-bottom: 10vh;
`
export const PlayAgainButton = styled.button`
	padding: var(--padding-s) var(--padding-xxl);
	font-weight: var(--font-w500);
	font-size: var(-font-s);
	border-radius: var(--border-radius-s);
	color: var(--header-outline);
	background: var(--white);
	letter-spacing: var(--letter-spacing-s);
	border: none;
`
export const CounterSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: var(--font-xl);
	height: 9rem;
	width: 9rem;
	border-radius: 50%;
	background-color: rgb(0 0 0 / 30%);
`

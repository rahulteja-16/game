import styled from 'styled-components'
import devices from '../../devices'

export const PlaySection = styled.section`
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-template-columns: 1fr;
	grid-template-areas:
		'header'
		'play'
		'footer ';

	@media ${devices.tab} {
		grid-template-columns: 10vw auto 10vw;
		grid-template-areas:
			'header header header'
			'. play .'
			'footer footer footer ';
	}

	@media ${devices.laptop} {
		grid-template-columns: 20vw auto 20vw;
		grid-template-areas:
			'header header header'
			'. play .'
			'footer footer footer ';
	}

	@media ${devices.desktop} {
		grid-template-columns: 30vw auto auto auto 30vw;
		grid-template-areas:
			'. header header header .'
			'. play play play .'
			'footer footer footer footer footer ';
	}

	@media ${devices.monitor} {
		grid-template-columns: auto 260px 260px 260px auto;
		grid-template-areas:
			'. header header header .'
			'. play play play .'
			'. footer footer footer . ';
	}
`

export const PlayWrapper = styled.div`
	margin: 2rem 1rem 5rem 1rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-row-gap: 3rem;
	grid-template-areas:
		'scissors scissors'
		'spock paper'
		'lizard rock';

	@media ${devices.mobile} {
		grid-row-gap: 3rem;
	}
`

export const PentagonWrapper = styled.div`
	grid-area: play;
	position: relative;
`

export const PentagonImg = styled.img`
	position: absolute;
	width: 75%;
	height: 65%;
	top: 5.5rem;
	right: 3.5rem;

	@media ${devices.mobile} {
		top: 5.5rem;
		right: 3.5rem;
	}

	@media ${devices.tab} {
		height: 70%;
		top: 5.5rem;
		right: 4.5rem;
	}

	@media ${devices.desktop} {
		width: 80%;
		height: 70%;
		top: 5.5rem;
		right: 4rem;
	}

	@media ${devices.monitor} {
		width: 75%;
		height: 70%;
		top: 6rem;
		right: 6rem;
	}
`

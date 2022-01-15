import styled from 'styled-components'
import devices from '../../devices'

export const ChoiceWrapper = styled.button<{
	bgColor: string
	gridValue: string
	gridPosition: string
	addHeight: number
	addWidth: number
	isHoverActive: boolean
	showRipples: boolean
}>`
	z-index: 0;
	grid-area: ${({ gridValue }) => gridValue};
	height: ${({ addHeight }) => 9 + addHeight}rem;
	width: ${({ addWidth }) => 9 + addWidth}rem;
	border: 0.75rem solid;
	border-radius: 50%;
	transition: transform 0.2s;
	background: var(--white);
	border-color: var(${({ bgColor }) => bgColor});
	box-shadow: inset 0px 5px 6px grey,
		0px 8px var(${({ bgColor }) => bgColor}-light);
	justify-self: ${({ gridPosition }) => gridPosition};

	${({ isHoverActive }) =>
		isHoverActive &&
		`&:hover { transform: translate(0.2rem, 0.2rem) scale(1.1);}`}

	${({ showRipples, bgColor }) =>
		showRipples &&
		`box-shadow: inset 0px 5px 6px grey,
	0px 8px var(${bgColor}-light),
	0px 0px 0px 30px rgb(255 255 255 / 7%), 
	0px 0px 0px 60px rgb(255 255 255 / 5%), 
	0px 0px 0px 100px rgb(255 255 255 / 3%);`}

	

	@media ${devices.mobile} {
		height: ${({ addHeight }) => 7 + addHeight}rem;
		width: ${({ addWidth }) => 7 + addWidth}rem;
	}
`
export const Image = styled.img<{
	addHeight: number
}>`
	height: ${({ addHeight }) => 3.7 + addHeight}rem;

	@media ${devices.mobile} {
		height: ${({ addHeight }) => 2.7 + addHeight}rem;
	}
`

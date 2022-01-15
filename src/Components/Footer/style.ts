import styled from 'styled-components'
import devices from '../../devices'
export const FooterWrapper = styled.footer`
	grid-area: footer;
	display: flex;
	justify-content: space-around;

	@media ${devices.desktop} {
		justify-content: right;
	}
	@media ${devices.monitor} {
		justify-content: right;
	}
`

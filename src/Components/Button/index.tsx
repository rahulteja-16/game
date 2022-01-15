import { ButtonPros } from '../../types'
import { ButtonWrapper } from './style'

const Button = ({ text, onBtnClick, aria }: ButtonPros) => {
	return (
		<ButtonWrapper aria-label={aria} onClick={onBtnClick}>
			{text}
		</ButtonWrapper>
	)
}

export default Button

import { ButtonPros } from '../../types'
import { ButtonWrapper } from './style'

const Button = ({ text, onBtnClick, aria }: ButtonPros) => {
	return (
		<ButtonWrapper
			aria-label={aria}
			onClick={onBtnClick}
			data-testid="button-test"
		>
			{text}
		</ButtonWrapper>
	)
}

export default Button

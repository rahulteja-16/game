import LOGO from '../../../images/logo-bonus.svg'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import {
	ContentWrapper,
	ErrorMessageSpan,
	ErrorSpan,
	Img,
	NotFoundWrapper,
} from './style'
import { ARIA, TEXT } from '../../constants'

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<NotFoundWrapper>
			<div>
				<Img src={LOGO} alt={TEXT.LOGO} />
			</div>
			<ContentWrapper>
				<ErrorSpan>{TEXT.Status404}</ErrorSpan>
				<ErrorMessageSpan>{TEXT.Error404}</ErrorMessageSpan>
				<Button
					aria={ARIA.errorClick}
					text={TEXT.ErrorBTN}
					onBtnClick={() => navigate('/')}
				/>
			</ContentWrapper>
		</NotFoundWrapper>
	)
}

export default NotFound

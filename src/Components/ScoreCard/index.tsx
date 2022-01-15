import { TEXT } from '../../constants'
import { ScoreCardProps } from '../../types'
import {
	CenterPosition,
	HeaderWrapper,
	ScoreBox,
	ScoreValue,
	TextWrapper,
} from './style'

const ScoreCard = ({ score }: ScoreCardProps) => {
	return (
		<HeaderWrapper>
			<CenterPosition>
				<TextWrapper>
					<span>{TEXT.rock}</span>
					<span>{TEXT.paper}</span>
					<span>{TEXT.scissors}</span>
					<span>{TEXT.lizard}</span>
					<span>{TEXT.spock}</span>
				</TextWrapper>
				<ScoreBox>
					<span>{TEXT.score}</span>
					<ScoreValue>
						{score > 0 && score < 10 ? `0${score}` : score}
					</ScoreValue>
				</ScoreBox>
			</CenterPosition>
		</HeaderWrapper>
	)
}

export default ScoreCard

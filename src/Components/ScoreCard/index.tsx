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
		<HeaderWrapper data-testid="score-card-test">
			<CenterPosition>
				<TextWrapper>
					<span data-testid="game-text">{TEXT.rock}</span>
					<span data-testid="game-text">{TEXT.paper}</span>
					<span data-testid="game-text">{TEXT.scissors}</span>
					<span data-testid="game-text">{TEXT.lizard}</span>
					<span data-testid="game-text">{TEXT.spock}</span>
				</TextWrapper>
				<ScoreBox>
					<span data-testid="score-text">{TEXT.score}</span>
					<ScoreValue data-testid="score-value">
						{score > 0 && score < 10 ? `0${score}` : score}
					</ScoreValue>
				</ScoreBox>
			</CenterPosition>
		</HeaderWrapper>
	)
}

export default ScoreCard

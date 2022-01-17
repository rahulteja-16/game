import ChoiceSelector from '../../Components/ChoiceSelector'
import { Choices, PlayContainerProps } from '../../types'
import Pentagon from '../../../images/bg-pentagon.svg'
import { PentagonImg, PentagonWrapper, PlaySection, PlayWrapper } from './style'
import { TEXT } from '../../constants'
import ScoreCard from '../../Components/ScoreCard'
import Footer from '../../Components/Footer'

const PlayContainer = ({
	updateUserChoice,
	score,
	setScore,
}: PlayContainerProps) => {
	return (
		<PlaySection>
			<ScoreCard score={score} />
			<PentagonWrapper>
				<PentagonImg
					src={Pentagon}
					alt={TEXT.pentagon}
					data-testid="pentagon-image"
				/>
				<PlayWrapper>
					<ChoiceSelector
						choice={Choices.SCISSORS}
						updateUserChoice={updateUserChoice}
					/>
					<ChoiceSelector
						choice={Choices.PAPER}
						updateUserChoice={updateUserChoice}
					/>
					<ChoiceSelector
						choice={Choices.ROCK}
						updateUserChoice={updateUserChoice}
					/>
					<ChoiceSelector
						choice={Choices.LIZARD}
						updateUserChoice={updateUserChoice}
					/>
					<ChoiceSelector
						choice={Choices.SPOCK}
						updateUserChoice={updateUserChoice}
					/>
				</PlayWrapper>
			</PentagonWrapper>
			<Footer onUpdateScore={setScore} />
		</PlaySection>
	)
}
export default PlayContainer

import { Choices, ChoiceSelectorProps } from '../../types'
import { ChoiceWrapper, Image } from './style'
import lizardSVG from '../../../images/icon-lizard.svg'
import rockSVG from '../../../images/icon-rock.svg'
import paperSVG from '../../../images/icon-paper.svg'
import scissorsSVG from '../../../images/icon-scissors.svg'
import spockSVG from '../../../images/icon-spock.svg'

const ChoiceSelector = ({
	choice,
	updateUserChoice,
	addHeight = 0,
	addWidth = 0,
	isHoverActive = true,
	showRipples = false,
}: ChoiceSelectorProps) => {
	const color = `--${choice}-color`
	const position =
		choice === Choices.PAPER
			? 'right'
			: choice === Choices.SPOCK
			? 'left'
			: 'center'

	const aria = `Select ${choice}`
	return (
		<ChoiceWrapper
			aria-label={aria}
			data-choice={choice}
			bgColor={color}
			gridValue={choice}
			gridPosition={position}
			onClick={() => updateUserChoice(choice)}
			addHeight={addHeight}
			addWidth={addWidth}
			isHoverActive={isHoverActive}
			showRipples={showRipples}
		>
			{choice === Choices.LIZARD && (
				<Image addHeight={addHeight} src={lizardSVG} alt={Choices.LIZARD} />
			)}
			{choice === Choices.ROCK && (
				<Image addHeight={addHeight} src={rockSVG} alt={Choices.ROCK} />
			)}
			{choice === Choices.PAPER && (
				<Image addHeight={addHeight} src={paperSVG} alt={Choices.PAPER} />
			)}
			{choice === Choices.SCISSORS && (
				<Image
					addHeight={addHeight}
					src={scissorsSVG}
					alt={Choices.SCISSORS}
				/>
			)}
			{choice === Choices.SPOCK && (
				<Image addHeight={addHeight} src={spockSVG} alt={Choices.SPOCK} />
			)}
		</ChoiceWrapper>
	)
}

export default ChoiceSelector

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { generateRandomChoice, updateStatus } from '../../Helpers/utils'
import { BattleContainerProps, Choices, GameResult } from '../../types'

import {
	BattleResult,
	BattleSection,
	BattleWrapper,
	CounterSection,
	ItemWrapper,
	PlayAgainButton,
	PlayAgainWrapper,
	ResultText,
	TextWrapper,
} from './style'

import ScoreCard from '../../Components/ScoreCard'
import Footer from '../../Components/Footer'
import ChoiceSelector from '../../Components/ChoiceSelector'
import { ARIA, TEXT } from '../../constants'

const BattleContainer = ({
	score,
	setScore,
	userChoice,
}: BattleContainerProps) => {
	const navigate = useNavigate()
	const [computerPick, setComputerPick] = useState<Choices>(Choices.DEFAULT)
	const [status, setStatus] = useState<GameResult>()
	const [counter, setCounter] = useState(3)

	useEffect(() => {
		if (userChoice === Choices.DEFAULT) {
			navigate('/game')
		}
		setComputerPick(generateRandomChoice())
	}, [navigate, userChoice])

	useEffect(() => {
		const timer: number | void =
			counter > 0
				? window.setInterval(() => {
						setCounter(counter - 1)
				  }, 1000)
				: setStatus(updateStatus(computerPick, userChoice))
		return () => clearInterval(timer as number)
	}, [computerPick, counter, userChoice])

	useEffect(() => {
		if (status === GameResult.WIN) {
			setScore(score + 1)
		}
		if (status === GameResult.LOSE) {
			setScore(score - 1)
		}
	}, [status])

	return (
		<BattleSection>
			<ScoreCard score={score} />

			<BattleWrapper data-testid="battle-test">
				<ItemWrapper>
					<ChoiceSelector
						addHeight={2}
						addWidth={2}
						choice={userChoice}
						updateUserChoice={() => null}
						isHoverActive={false}
						showRipples={counter !== 0 ? false : true}
					/>
					<TextWrapper>{TEXT.picked}</TextWrapper>
				</ItemWrapper>

				<ItemWrapper>
					{counter === 0 && (
						<ChoiceSelector
							addHeight={2}
							addWidth={2}
							choice={computerPick}
							updateUserChoice={() => console.log('test')}
							isHoverActive={false}
							showRipples={false}
						/>
					)}
					{counter !== 0 && (
						<CounterSection>
							<span>{counter}</span>
						</CounterSection>
					)}
					<TextWrapper>{TEXT.house}</TextWrapper>
				</ItemWrapper>
			</BattleWrapper>

			<BattleResult data-testid="battle-result">
				{GameResult.WIN === status && <ResultText>{TEXT.win}</ResultText>}
				{GameResult.LOSE === status && <ResultText>{TEXT.lose}</ResultText>}
				{GameResult.DRAW === status && <ResultText>{TEXT.draw}</ResultText>}
				<PlayAgainWrapper>
					<PlayAgainButton
						onClick={() => navigate('/game')}
						aria-label={ARIA.playAgain}
					>
						{TEXT.playAgain}
					</PlayAgainButton>
				</PlayAgainWrapper>
			</BattleResult>

			<Footer onUpdateScore={setScore} />
		</BattleSection>
	)
}

export default BattleContainer

import { Choices, GameResult } from '../types'

export const checkWinLose = (
	player: string | undefined,
	computer: string | undefined
) => {
	if (player === computer) return GameResult.DRAW
	switch (player) {
		case Choices.SPOCK:
			if (computer === Choices.PAPER || computer === Choices.LIZARD)
				return GameResult.LOSE
			else return GameResult.WIN
		case Choices.LIZARD:
			if (computer === Choices.ROCK || computer === Choices.SCISSORS)
				return GameResult.LOSE
			else return GameResult.WIN
		case Choices.ROCK:
			if (computer === Choices.PAPER || computer === Choices.SPOCK)
				return GameResult.LOSE
			else return GameResult.WIN
		case Choices.PAPER:
			if (computer === Choices.LIZARD || computer === Choices.SCISSORS)
				return GameResult.LOSE
			else return GameResult.WIN
		case Choices.SCISSORS:
			if (computer === Choices.SPOCK || computer === Choices.ROCK)
				return GameResult.LOSE
			else return GameResult.WIN
		default:
			return GameResult.ERROR
	}
}

export const generateRandomChoice = () => {
	const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
	const idx = Math.floor(Math.random() * choices.length)
	if (choices[idx] === 'rock') {
		return Choices.ROCK
	}
	if (choices[idx] === 'paper') {
		return Choices.PAPER
	}
	if (choices[idx] === 'scissors') {
		return Choices.SCISSORS
	}
	if (choices[idx] === 'lizard') {
		return Choices.LIZARD
	}
	if (choices[idx] === 'spock') {
		return Choices.SPOCK
	}
	return Choices.DEFAULT
}

export const updateStatus = (computerPick: Choices, userChoice: Choices) => {
	if (computerPick !== Choices.DEFAULT) {
		return checkWinLose(userChoice, computerPick)
	}
}

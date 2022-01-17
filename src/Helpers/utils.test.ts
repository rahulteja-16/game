import { GameResult } from '../types'
import { checkWinLose } from './utils'
describe('Win or Lose | Player - Spock', () => {
	it('Computer - Paper', () => {
		const result = checkWinLose('spock', 'paper')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Lizard', () => {
		const result = checkWinLose('spock', 'lizard')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Rock', () => {
		const result = checkWinLose('spock', 'rock')
		expect(result).toBe(GameResult.WIN)
	})
	it('Computer - Scissors', () => {
		const result = checkWinLose('spock', 'scissors')
		expect(result).toBe(GameResult.WIN)
	})
})

describe('Win or Lose | Player - Lizard', () => {
	it('Computer - Rock', () => {
		const result = checkWinLose('lizard', 'rock')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Scissors', () => {
		const result = checkWinLose('lizard', 'scissors')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Paper', () => {
		const result = checkWinLose('lizard', 'paper')
		expect(result).toBe(GameResult.WIN)
	})
	it('Computer - Spock', () => {
		const result = checkWinLose('lizard', 'spock')
		expect(result).toBe(GameResult.WIN)
	})
})

describe('Win or Lose | Player - Rock', () => {
	it('Computer - Paper', () => {
		const result = checkWinLose('rock', 'paper')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Spock', () => {
		const result = checkWinLose('rock', 'spock')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Scissors', () => {
		const result = checkWinLose('rock', 'scissors')
		expect(result).toBe(GameResult.WIN)
	})
	it('Computer - lizard', () => {
		const result = checkWinLose('rock', 'lizard')
		expect(result).toBe(GameResult.WIN)
	})
})

describe('Win or Lose | Player - Paper', () => {
	it('Computer - Lizard', () => {
		const result = checkWinLose('paper', 'lizard')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Scissors', () => {
		const result = checkWinLose('paper', 'scissors')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Rock', () => {
		const result = checkWinLose('paper', 'rock')
		expect(result).toBe(GameResult.WIN)
	})
	it('Computer - Spock', () => {
		const result = checkWinLose('paper', 'spock')
		expect(result).toBe(GameResult.WIN)
	})
})

describe('Win or Lose | Player - Scissors', () => {
	it('Computer - Spock', () => {
		const result = checkWinLose('scissors', 'spock')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Rock', () => {
		const result = checkWinLose('scissors', 'rock')
		expect(result).toBe(GameResult.LOSE)
	})
	it('Computer - Paper', () => {
		const result = checkWinLose('scissors', 'paper')
		expect(result).toBe(GameResult.WIN)
	})
	it('Computer - Lizard', () => {
		const result = checkWinLose('scissors', 'lizard')
		expect(result).toBe(GameResult.WIN)
	})
})

describe('Win or Lose ', () => {
	it('Should render error', () => {
		const result = checkWinLose('', 'spock')
		expect(result).toBe(GameResult.ERROR)
	})

	it('Should render draw', () => {
		const result = checkWinLose('spock', 'spock')
		expect(result).toBe(GameResult.DRAW)
	})
})

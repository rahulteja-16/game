export interface BattleContainerProps {
	score: number
	userChoice: Choices
	setScore: (score: number) => void
}

export interface FooterProps {
	onUpdateScore: (score: number) => void
}

export interface PlayContainerProps {
	updateUserChoice: (choice: Choices) => void
	score: number
	setScore: (score: number) => void
}

export interface ScoreCardProps {
	score: number
}

export enum Choices {
	ROCK = 'rock',
	PAPER = 'paper',
	SCISSORS = 'scissors',
	LIZARD = 'lizard',
	SPOCK = 'spock',
	DEFAULT = '',
}

export interface ChoiceSelectorProps {
	choice: Choices
	updateUserChoice: (choice: Choices) => void
	addHeight?: number
	addWidth?: number
	isHoverActive?: boolean
	showRipples?: boolean
}

export interface ButtonPros {
	aria: string
	text: string
	onBtnClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface ToggleProps {
	toggle: React.MouseEventHandler<HTMLButtonElement>
}
export interface WindowResizeType {
	width: undefined | number
	height: undefined | number
}

export enum DeviceTypes {
	DESKTOP = 'desktop',
	MOBILE = 'mobile',
	TAB = 'tab',
}

export enum GameResult {
	WIN = 'win',
	LOSE = 'lose',
	DRAW = 'draw',
	ERROR = 'error',
}

import React, { useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../store/uiSlice'
import {
	addHistory,
	clearHistory,
	setRound,
	resetRound,
} from '../../store/gameSlice'

import s from './Game.module.scss'

import GameCard from './GameCard/GameCard'
import Button from '../UI/Button/Button'

import randomChoice from '../../game-helpers/enemy-choice'
import didYouWonRound from '../../game-helpers/did-you-won-round'

function Game() {
	const dispatch = useDispatch()
	const round = useSelector(state => state.game.round)
	const enemyChoice = useRef(randomChoice())

	const clickHandler = type => {
		const choiceText = type === 'rock' ? '✊' : type === 'paper' ? '✋' : '✌'
		return () => {
			dispatch(
				addHistory({
					round,
					playerChoice: choiceText,
					enemyChoice: enemyChoice.current.text,
					result: didYouWonRound(type, enemyChoice.current.name),
				})
			)
			dispatch(setRound())
			dispatch(setPage('SCOREBOARD'))
		}
	}

	const resetHandler = () => {
		dispatch(clearHistory())
		dispatch(resetRound())
		dispatch(setPage('RULES'))
	}

	return (
		<div className={s.game}>
			<p className={s.title}>Choose!</p>
			<div className={s['card-container']}>
				<GameCard onClick={clickHandler('rock')}>&#x270A;</GameCard>
				<GameCard onClick={clickHandler('paper')}>&#x270B;</GameCard>
				<GameCard onClick={clickHandler('scissors')}>&#x270C;</GameCard>
			</div>
			<Button onClick={resetHandler} className={s['reset-btn']}>
				Reset
			</Button>
		</div>
	)
}

export default Game

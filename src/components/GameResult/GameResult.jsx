import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { clearHistory, resetRound, setGameResult } from '../../store/gameSlice'
import { setPage } from '../../store/uiSlice'

import s from './GameResult.module.scss'

import Button from '../UI/Button/Button'

function GameResult() {
	const dispatch = useDispatch()
	const gameResult = useSelector(state => state.game.gameResult)

	const greetingsMessage =
		gameResult === 'won' ? 'Congratulations!' : 'My apologies..'

	const clickHandler = () => {
		dispatch(clearHistory())
		dispatch(resetRound())
		dispatch(setPage('GAME_STARTED'))
		dispatch(setGameResult(''))
	}

	return (
		<div className={s['result-of-the-game']}>
			<div className={s.greeting}>
				<p>{greetingsMessage}</p>
			</div>
			<div className={s['game-result']}>
				<p className={gameResult === 'won' ? s.won : s.lost}>
					{gameResult === 'won' ? 'You won!' : `You lost`}
				</p>
			</div>

			<Button onClick={clickHandler} className={s['play-again-btn']}>
				Play Again!
			</Button>
		</div>
	)
}

export default GameResult

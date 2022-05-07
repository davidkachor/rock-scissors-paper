import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../store/uiSlice'
import { setGameResult } from '../../store/gameSlice'

import s from './Scoreboard.module.scss'

import ScoreboardLog from './ScoreboardLog/ScoreboardLog'
import Button from '../UI/Button/Button'

function Scoreboard() {
	const dispatch = useDispatch()
	const { history, gameResult } = useSelector(state => state.game)

	useEffect(() => {
		if (history.filter(e => e.result === 'lost').length === 3) {
			dispatch(setGameResult('lost'))
		} else if (history.filter(e => e.result === 'won').length === 3) {
			dispatch(setGameResult('won'))
		}
	}, [dispatch, history])

	const clickHandler = () => {
		if (gameResult === '') {
			dispatch(setPage('GAME_STARTED'))
		} else {
			dispatch(setPage('GAME_RESULT'))
		}
	}

	return (
		<div className={s.scoreboard}>
			<p className={s['scoreboard-title']}>Scoreboard</p>
			<div className={s['history-list']}>
				{history.map((e, i) => (
					<ScoreboardLog
						playerChoice={e.playerChoice}
						enemyChoice={e.enemyChoice}
						result={e.result}
						round={e.round}
						key={i}
					/>
				))}
			</div>
			<Button onClick={clickHandler} className={s['continue-btn']}>
				Continue!
			</Button>
		</div>
	)
}

export default Scoreboard

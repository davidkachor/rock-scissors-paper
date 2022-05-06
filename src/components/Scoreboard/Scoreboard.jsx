import React from 'react'
import s from './Scoreboard.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import ScoreboardLog from './ScoreboardLog/ScoreboardLog'
import Button from '../UI/Button/Button'
import { setPage } from '../../store/uiSlice'

function Scoreboard() {
	const dispatch = useDispatch()
	const history = useSelector(state => state.game.history)

	const clickHandler = () => {
		dispatch(setPage('GAME_STARTED'))
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

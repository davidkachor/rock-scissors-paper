import React from 'react'
import s from './ScoreboardLog.module.scss'

function ScoreboardLog(props) {
	let resultClassName
	let result

	switch (props.result) {
		default:
			resultClassName = `${s.result} ${s.draw}`
			result = 'DRAW'
			break
		case 'won':
			resultClassName = `${s.result} ${s.won}`
			result = 'WON'
			break
		case 'lost':
			resultClassName = `${s.result} ${s.lost}`
			result = 'LOST'
			break
	}

	return (
		<div className={s['history-log']}>
			<div className={s['log-container']}>
				<div className={s.round}>
					<p>Round {props.round}</p>
				</div>
				<div className={s.opponents}>
					<p>
						{props.playerChoice} vs {props.enemyChoice}
					</p>
				</div>
				<div className={resultClassName}>
					<p>{result}</p>
				</div>
			</div>
		</div>
	)
}

export default ScoreboardLog

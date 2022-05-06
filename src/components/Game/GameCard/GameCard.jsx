import React from 'react'
import s from './GameCard.module.scss'

function GameCard(props) {
	return (
		<div onClick={props.onClick} className={s['game-card']}>
			<div className={s['card-content']}>{props.children}</div>
		</div>
	)
}

export default GameCard

import React from 'react'

import s from './Button.module.scss'

function Button(props) {
	return (
		<button className={`${s.btn} ${props.className}`} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button

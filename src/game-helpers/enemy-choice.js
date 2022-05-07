const enemyChoice = () => {
	const enemyOptions = [
		{ num: 0, name: 'scissors', text: '✌' },
		{ num: 1, name: 'rock', text: '✊' },
		{ num: 2, name: 'paper', text: '✋' },
	]
	const randomNum = Math.floor(Math.random() * 3)
	return enemyOptions.find(e => e.num === randomNum)
}

export default enemyChoice

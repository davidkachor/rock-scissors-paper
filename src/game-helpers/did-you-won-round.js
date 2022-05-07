const didYouWonRound = (yourChoice, enemyChoice) => {
	if (yourChoice === enemyChoice) {
		return 'draw'
	} else if (
		(yourChoice === 'scissors' && enemyChoice === 'paper') ||
		(yourChoice === 'paper' && enemyChoice === 'rock') ||
		(yourChoice === 'rock' && enemyChoice === 'scissors')
	) {
		return 'won'
	} else return 'lost'
}

export default didYouWonRound

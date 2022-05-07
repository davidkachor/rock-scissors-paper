import s from './App.module.scss'
import Rules from './components/Rules/Rules'
import { useSelector } from 'react-redux'
import Game from './components/Game/Game'
import Scoreboard from './components/Scoreboard/Scoreboard'
import GameResult from './components/GameResult/GameResult'

function App() {
	const page = useSelector(state => state.ui.page)
	let content

	switch (page) {
		default:
			content = <Rules />
			break
		case 'GAME_STARTED':
			content = <Game />
			break
		case 'SCOREBOARD':
			content = <Scoreboard />
			break
		case 'GAME_RESULT':
			content = <GameResult />
			break
	}

	return <div className={s.container}>{content}</div>
}

export default App

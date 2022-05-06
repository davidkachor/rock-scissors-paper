import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		gameResult: '',
		history: [
		//	{ round: 1, playerChoice: '✋', enemyChoice: '✋', result: 'draw' },
		//	{ round: 2, playerChoice: '✋', enemyChoice: '✋', result: 'won' },
        //    {round: 3, playerChoice: '✋', enemyChoice: '✋', result: 'lost'}
		],
	},
	reducers: {
		addHistory(state, action) {
			state.history.unshift(action.payload)
		},
		clearHistory(state) {
			state.history = []
		},
		setGameResult(state, action) {
			state.gameResult = action.payload
		},
	},
})

export const { addHistory, clearHistory, setGameResult } = gameSlice.actions

export default gameSlice

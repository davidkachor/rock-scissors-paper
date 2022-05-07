import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		gameResult: '',
		history: [],
		round: 1,
	},
	reducers: {
		addHistory(state, action) {
			state.history.push(action.payload)
		},
		clearHistory(state) {
			state.history = []
		},
		setGameResult(state, action) {
			state.gameResult = action.payload
		},
		setRound(state) {
			state.round++
		},
	},
})

export const { addHistory, clearHistory, setGameResult, setRound } = gameSlice.actions

export default gameSlice

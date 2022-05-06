import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import gameSlice from "./gameSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        game: gameSlice.reducer
    }
})

export default store
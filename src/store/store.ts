import {combineReducers, configureStore} from "@reduxjs/toolkit";
import lessonReducer from "./slices/lessons.slice";

const rootReducer = combineReducers({
    lessonReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch=AppStore['dispatch'];


import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGroup} from "../../interfaces";
import {NumeratorLessonsSchedule_KN_31_2} from "../../data/lessonsSchedule/lessonsSchedule";

// import {IEvent, ITimezone} from "../../interfaces";
// import {eventService} from "../../services";

interface ILessonsState {
    isNumerator: boolean,
    errors: object,
    groupSchedule: IGroup,
    selectedDayAdaptive: string;
}

const initialState: ILessonsState = {
    isNumerator: true,
    errors: [],
    groupSchedule: NumeratorLessonsSchedule_KN_31_2,
    selectedDayAdaptive: 'Понеділок'
}

export const lessonsSlice = createSlice({
    name: 'lessonsSlice',
    initialState,
    reducers: {
        setIsNumeratorWeek: ((state, action) => {
            state.isNumerator = action.payload
        }),
        setGroupSchedule: ((state, action) => {
            state.groupSchedule = action.payload
        }),
        setSelectedDayAdaptive: ((state, action) => {
            state.selectedDayAdaptive = action.payload
        }),
    },
    extraReducers: {}

})

const recordReducer = lessonsSlice.reducer;
export default recordReducer;

export const {
    setIsNumeratorWeek,
    setGroupSchedule,
    setSelectedDayAdaptive
} = lessonsSlice.actions;


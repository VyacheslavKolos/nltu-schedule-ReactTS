import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGroup} from "../../interfaces";
import {NumeratorLessonsSchedule_KN_31_2} from "../../data/lessonsSchedule/lessonsSchedule";

// import {IEvent, ITimezone} from "../../interfaces";
// import {eventService} from "../../services";

interface ILessonsState {
    isNumerator: boolean,
    errors: object,
    groupSchedule: IGroup,
}

const initialState: ILessonsState = {
    isNumerator: true,
    errors: [],
    groupSchedule:NumeratorLessonsSchedule_KN_31_2,
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
    },
    extraReducers: {

    }

})

const recordReducer = lessonsSlice.reducer;
export default recordReducer;

export const {
    setIsNumeratorWeek,
    setGroupSchedule,
} = lessonsSlice.actions;


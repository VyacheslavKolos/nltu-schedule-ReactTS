import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

// import {IEvent, ITimezone} from "../../interfaces";
// import {eventService} from "../../services";

interface ILessonsState {
    isPublished: boolean,
    errors: object,
}

const initialState: ILessonsState = {
    isPublished: false,
    errors: []
}

export const lessonsSlice = createSlice({
    name: 'lessonsSlice',
    initialState,
    reducers: {
        setIsPublishedEvent: ((state, action) => {
            state.isPublished = action.payload
        }),
    },
    extraReducers: {

    }

})

const recordReducer = lessonsSlice.reducer;
export default recordReducer;

export const {
    setIsPublishedEvent,
} = lessonsSlice.actions;


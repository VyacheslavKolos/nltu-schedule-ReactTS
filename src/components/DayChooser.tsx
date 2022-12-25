import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {isEvenWeek} from "../usefulFunctions/usefulFunctions";
import {useAppDispatch, useAppSelector} from "../hooks";
import {
    AllGroupsDominatorSchedule,
    AllGroupsNumeratorSchedule,
    NumeratorLessonsSchedule_KN_31_2
} from "../data/lessonsSchedule/lessonsSchedule";
import {IGroup} from "../interfaces";

import {setGroupSchedule, setIsNumeratorWeek} from "../store/slices";

const DayChooser = () => {
    const [dayName, setDayName] = React.useState('Понеділок');
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця']

    const dispatch = useAppDispatch();

    const {isNumerator} = useAppSelector(state => state.lessonReducer)

    const handleChange = (event: SelectChangeEvent) => {
        setDayName(event.target.value as string);
    };

    const setSchedule = (group: IGroup) => {

        if (!isNumerator) {
            dispatch(setIsNumeratorWeek(true))
        }

        dispatch(setGroupSchedule(group))
    };


    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Day</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dayName}
                    label="day"
                    onChange={handleChange}
                >

                    {
                        days.map(day =>(
                            <MenuItem value={day}
                                          sx={{width: '100px', m: '0 auto'}}
                                          key={day}>{day}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </Box>
    );
}
export default DayChooser;

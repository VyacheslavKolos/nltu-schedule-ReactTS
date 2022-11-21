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
import {useState} from "react";
import {setGroupSchedule, setIsNumeratorWeek} from "../store/slices";

const GroupChooser = () => {
    const [groupName, setGroupName] = React.useState(NumeratorLessonsSchedule_KN_31_2.group);

    const dispatch = useAppDispatch();

    const {isNumerator} = useAppSelector(state => state.lessonReducer)

    const handleChange = (event: SelectChangeEvent) => {
        setGroupName(event.target.value as string);
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
                <InputLabel id="demo-simple-select-label">Group</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={groupName}
                    label="Group"
                    onChange={handleChange}
                >

                    {
                        !isEvenWeek() ?
                            AllGroupsNumeratorSchedule.map(grp => (
                                <MenuItem value={grp.group} onClick={() => setSchedule(grp)}
                                          sx={{width: '100px', m: '0 auto'}}
                                          key={grp.group}>{grp.group}</MenuItem>
                            ))
                            :
                            AllGroupsDominatorSchedule.map(grp => (
                                <MenuItem value={grp.group} onClick={() => setSchedule(grp)}
                                          sx={{width: '100px', m: '0 auto'}}
                                          key={grp.group}>{grp.group}</MenuItem>
                            ))
                    }

                </Select>
            </FormControl>
        </Box>
    );
}
export default GroupChooser;

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import {Stack, Typography} from "@mui/material";
// import {
//     AllGroupsDominatorSchedule,
//     AllGroupsNumeratorSchedule,
//     NumeratorLessonsSchedule_KN_31_2
// } from "../data/lessonsSchedule/lessonsSchedule";
// import {useState} from "react";
// import {IGroup} from "../interfaces";
// import {useAppDispatch, useAppSelector} from "../hooks";
// import {setGroupSchedule, setIsNumeratorWeek} from "../store/slices";
// import {isEvenWeek} from "../usefulFunctions/usefulFunctions";
//
//
// const GroupChooser = () => {
//
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//
//     const [selectedGroup, setSelectedGroup] = useState<IGroup>(NumeratorLessonsSchedule_KN_31_2);
//
//     const dispatch = useAppDispatch();
//
//     const {isNumerator} = useAppSelector(state => state.lessonReducer)
//
//     const open = Boolean(anchorEl);
//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleClose = (group: IGroup) => {
//
//         if (!isNumerator){
//             dispatch(setIsNumeratorWeek(true))
//         }
//
//         setSelectedGroup(group)
//         dispatch(setGroupSchedule(group))
//
//         setAnchorEl(null);
//     };
//
//     return (
//         <div>
//             <Button
//                 id="basic-button"
//                 aria-controls={open ? 'basic-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}
//                 sx={{color: 'black', backgroundColor: 'rgb(239, 240, 248)', width: '200px'}}
//             >
//                 <Stack direction={'row'} justifyContent={'space-between'} width={'95%'}>
//                     <Typography>
//                         {selectedGroup?.group}
//                     </Typography>
//                     <KeyboardArrowDownIcon/>
//                 </Stack>
//             </Button>
//             <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                 }}
//             >
//
//                 {
//                     !isEvenWeek() ?
//                         AllGroupsNumeratorSchedule.map(grp => (
//                             <MenuItem onClick={() => handleClose(grp)} sx={{width: '200px'}}
//                                       key={grp.group}>{grp.group}</MenuItem>
//                         ))
//                         :
//                         AllGroupsDominatorSchedule.map(grp => (
//                             <MenuItem onClick={() => handleClose(grp)} sx={{width: '200px'}}
//                                       key={grp.group}>{grp.group}</MenuItem>
//                         ))
//                 }
//
//             </Menu>
//         </div>
//     );
// }
//
// export default GroupChooser;


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
    const [selectedGroup, setSelectedGroup] = useState<IGroup>(NumeratorLessonsSchedule_KN_31_2);
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

        setSelectedGroup(group)
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

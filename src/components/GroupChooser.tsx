import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Stack, Typography} from "@mui/material";
import {
    AllGroupsDominatorSchedule,
    AllGroupsNumeratorSchedule,
    NumeratorLessonsSchedule_KN_31_2
} from "../data/lessonsSchedule/lessonsSchedule";
import {useState} from "react";
import {IGroup} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setGroupSchedule, setIsNumeratorWeek} from "../store/slices";


const GroupChooser = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [selectedGroup, setSelectedGroup] = useState<IGroup>(NumeratorLessonsSchedule_KN_31_2);

    const dispatch = useAppDispatch();

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (group: IGroup) => {

        setSelectedGroup(group)
        dispatch(setGroupSchedule(group))
        setAnchorEl(null);
    };

    let currentDate: any = new Date();
    let startDate: any = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    let weekNumber: number | boolean = Math.ceil(days / 7);
    weekNumber = weekNumber % 2 === 0;

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: 'black', backgroundColor: 'rgb(239, 240, 248)', width: '200px'}}
            >
                <Stack direction={'row'} justifyContent={'space-between'} width={'95%'}>
                    <Typography>
                        {selectedGroup?.group}
                    </Typography>
                    <KeyboardArrowDownIcon/>
                </Stack>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {
                    !weekNumber ?
                        AllGroupsNumeratorSchedule.map(grp => (
                            <MenuItem onClick={() => handleClose(grp)} sx={{width: '200px'}}
                                      key={grp.group}>{grp.group}</MenuItem>
                        ))
                        :
                        AllGroupsDominatorSchedule.map(grp => (
                            <MenuItem onClick={() => handleClose(grp)} sx={{width: '200px'}}
                                      key={grp.group}>{grp.group}</MenuItem>
                        ))
                }


            </Menu>
        </div>
    );
}

export default GroupChooser;



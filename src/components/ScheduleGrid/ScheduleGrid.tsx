import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Stack, Typography} from "@mui/material";
import {
    DominatorLessonsSchedule_KN_31_2,
    NumeratorLessonsSchedule_KN_31_2
} from "../../data/lessonsSchedule/lessonsSchedule";
import {FC, useEffect} from "react";
import {ILesson} from "../../interfaces";
import {LessonCard} from "../LessonCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setGroupSchedule} from "../../store/slices";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '80%'
}));

const FormRow: FC<{ time: string, lessons: ILesson[] }> = ({time, lessons}) => {
    return (
        <Stack flexDirection={'column'} width={'100%'} pb={'30px'}>
            <Stack direction={'row'} alignItems={'center'}>
                <Box sx={{
                    bgcolor: 'rgb(20, 21, 24)', width: '64px', height: '36px', borderRadius: '42px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <Typography color={'white'}>{time}</Typography>
                </Box>
                <Box borderTop={'2px dashed rgb(20, 21, 24)'} width={'100%'} ></Box>
            </Stack>

            <Stack flexDirection={'row'} ml={'66px'}>

                {lessons.map(less => (
                    less.lessonInfo ?
                        <Grid item xl={2.4}>
                            <Item sx={{height: '140px'}}>
                                <LessonCard lesson={less}/>
                            </Item>
                        </Grid> :
                        <Grid item xl={2.4}>
                            <Item
                                sx={{height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant={'h5'}>?????????? ??????????????</Typography>
                            </Item>
                        </Grid>
                ))}
            </Stack>

        </Stack>
    );
};


const ScheduleGrid = () => {

    const {isNumerator, groupSchedule} = useAppSelector(state => state.lessonReducer)

    const {schedule, group} = groupSchedule

    const dispatch = useAppDispatch();

    let currentDate : any = new Date();
    let startDate : any = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    let weekNumber = Math.ceil(days / 7);

    useEffect(() => {
        if (!(weekNumber % 2 ===0)) {
            if (isNumerator) {
                dispatch(setGroupSchedule(NumeratorLessonsSchedule_KN_31_2))
            } else {
                dispatch(setGroupSchedule(DominatorLessonsSchedule_KN_31_2))
            }
        } else {
            if (isNumerator) {
                dispatch(setGroupSchedule(DominatorLessonsSchedule_KN_31_2))
            } else {
                dispatch(setGroupSchedule(NumeratorLessonsSchedule_KN_31_2))
            }
        }
    }, [isNumerator])


    return (
        <Box p={'48px 20px 0 50px'} m={'36px 24px 64px'} sx={{
            borderRadius: '40px',
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 12px',
            flexGrow: 1
        }}>
            <Grid container spacing={1}>

                <Grid container item spacing={6}>
                    <Stack flexDirection={'row'} gap={'270px'} width={'100%'} justifyContent={'center'} mt={'14px'} ml={'30px'}>
                        <Typography variant={"h6"} sx={{}}>??????????????????</Typography>
                        <Typography variant={"h6"}>????????????????</Typography>
                        <Typography variant={"h6"}>????????????</Typography>
                        <Typography variant={"h6"}>????????????</Typography>
                        <Typography variant={"h6"}>??'????????????</Typography>
                    </Stack>
                </Grid>

                {schedule.map(day => (
                    <Grid container item spacing={3}>
                        <FormRow time={day.time} lessons={day.lessons}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ScheduleGrid;



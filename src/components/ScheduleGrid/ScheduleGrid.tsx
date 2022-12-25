import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Stack, Typography} from "@mui/material";
import {
    AllGroupsDominatorSchedule,
    AllGroupsNumeratorSchedule,
} from "../../data/lessonsSchedule/lessonsSchedule";
import {FC, useEffect} from "react";
import {ILesson} from "../../interfaces";
import {LessonCard} from "../LessonCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setGroupSchedule} from "../../store/slices";
import {isEvenWeek} from "../../usefulFunctions/usefulFunctions";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '15.5%'
}));


const FormRow: FC<{ time: string, lessons: ILesson[] }> = ({time, lessons}) => {
    return (
        <Stack flexDirection={'column'} width={'100%'}>
            <Stack direction={'row'} alignItems={'center'}>
                <Box sx={{
                    bgcolor: 'rgb(20, 21, 24)', width: '64px', height: '36px', borderRadius: '42px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <Typography color={'white'}>{time}</Typography>
                </Box>
                <Box borderTop={'2px dashed rgb(20, 21, 24)'} width={'100%'}></Box>
            </Stack>

            <Stack flexDirection={'row'} ml={'66px'} justifyContent={'space-between'}>
                {lessons.map(less => (
                    less.lessonInfo ?
                        <Item key={less.day} sx={{height: '140px'}}>
                            <LessonCard lesson={less}/>
                        </Item>
                        :
                        <Item key={less.day}
                              sx={{height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant={'h5'}>Немає заняття</Typography>
                        </Item>
                ))}
            </Stack>

        </Stack>
    );
};


const ScheduleGrid = () => {

    const {isNumerator, groupSchedule} = useAppSelector(state => state.lessonReducer)

    let {schedule, group} = groupSchedule

    const dispatch = useAppDispatch();

    // Змінює поточний тиждень -> наступний
    useEffect(() => {
        if (!isEvenWeek()) { // якщо зараз (парний) тиждень, то відмальовую нумератор, інакше домінатор
            if (isNumerator) { // на світчері поточний/наступний тиждень
                dispatch(setGroupSchedule((AllGroupsNumeratorSchedule.filter(elem => elem.group === group)[0])))  //то відмальовую нумератор, інакше домінатор
            } else {
                dispatch(setGroupSchedule((AllGroupsDominatorSchedule.filter(elem => elem.group === group)[0])))//інакше домінатор
            }
        } else {
            if (isNumerator) {
                dispatch(setGroupSchedule((AllGroupsDominatorSchedule.filter(elem => elem.group === group)[0])))
            } else {
                dispatch(setGroupSchedule((AllGroupsNumeratorSchedule.filter(elem => elem.group === group)[0])))
            }
        }
    }, [isNumerator])


    // Для адаптиву ********************************************
    if (true) {

    }else {
        const lessonsForAdaptive: any[] = []
        schedule.map(time => {
            time.lessons.map(less => {
                if (less.day === 'Понеділок') {
                    lessonsForAdaptive.push({time: time.time, lessons: [less]})
                }
            })
        })
        console.log(lessonsForAdaptive);
        schedule=lessonsForAdaptive
    }


    return (
        <Box p={'20px 20px 20px 30px'} m={'36px 24px 64px'} sx={{
            borderRadius: '40px',
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 12px',
            flexGrow: 1
        }}>

            <Box>
                <Stack flexDirection={'row'} justifyContent={'space-between'}
                       ml={'66px'}>
                    <Typography variant={"h6"} sx={{
                        width: '15.5%',
                        textAlign: 'center',
                        pl: '24px',
                        pr: '24px'
                    }}>Понеділок</Typography>
                    <Typography variant={"h6"}
                                sx={{width: '15.5%', textAlign: 'center', pl: '24px', pr: '24px'}}>Вівторок</Typography>
                    <Typography variant={"h6"}
                                sx={{width: '15.5%', textAlign: 'center', pl: '24px', pr: '24px'}}>Середа</Typography>
                    <Typography variant={"h6"}
                                sx={{width: '15.5%', textAlign: 'center', pl: '24px', pr: '24px'}}>Четвер</Typography>
                    <Typography variant={"h6"}
                                sx={{width: '15.5%', textAlign: 'center', pl: '24px', pr: '24px'}}>П'ятниця</Typography>
                </Stack>

                {schedule.map((day, ind) => (
                    <Box key={ind}>
                        <FormRow time={day.time} lessons={day.lessons}/>
                    </Box>
                ))}
            </Box>

        </Box>
    );
}

export default ScheduleGrid;



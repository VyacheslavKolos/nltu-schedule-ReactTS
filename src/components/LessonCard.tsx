import React, {FC} from 'react';
import {Box, Link, Stack, Typography} from "@mui/material";
import {ILesson} from "../interfaces";
import SchoolIcon from '@mui/icons-material/School';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from "@mui/material/Button";


const LessonCard: FC<{ lesson: ILesson }> = ({lesson}) => {
    const {lessonInfo} = lesson;
    return (
        <Stack direction={'column'} gap={'10px'} alignItems={'center'}>
            <Box sx={{
                bgcolor: lessonInfo?.type === 'Лекція' ? 'rgb(255, 127, 150)' : 'rgb(148, 157, 255)',
                height: '27px',
                width: '140px',
                color: 'rgb(255, 255, 255)',
                fontWeight: 600,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography>{lessonInfo?.type}</Typography>
            </Box>

            <Stack direction={'row'} gap={'6px'} alignItems={'center'}>
                <MenuBookIcon/>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    lineHeight: '17px',
                    color: 'rgb(20, 21, 24)',
                    boxSizing:'border-box',

                }}>
                    {lessonInfo?.name}
                </Typography>
            </Stack>

            <Stack direction={'row'} gap={'6px'} alignItems={'center'}>
                <SchoolIcon/>
                {lessonInfo?.teacher}
            </Stack>

            <Stack direction={'row'} gap={'6px'} alignItems={'center'}>

                <Link target={'_blank'} href={lessonInfo?.link}>
                    <Button variant="contained"  >
                    <InsertLinkIcon/>
                    go to the lesson
                </Button>
                </Link>

            </Stack>

        </Stack>
    );
};

export {LessonCard};

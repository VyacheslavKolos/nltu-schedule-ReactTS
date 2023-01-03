import React, {FC, useState} from 'react';
import {Box, Link, Stack, Typography} from "@mui/material";
import {ILesson} from "../interfaces";
import SchoolIcon from '@mui/icons-material/School';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useSearchParams} from "react-router-dom";
import {EditCard} from "./EditCard/EditCard";
import {AddCard} from "./AddCard/AddCard";
import {DeleteCard} from "./DeleteCard/DeleteCard";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const LessonCard: FC<{ lesson: ILesson }> = ({lesson}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const isAdmin = searchParams.get('admin')


    const {lessonInfo} = lesson;
    const [isShown, setIsShown] = useState(false);


    return (
        <Item
            sx={{
                height: '140px', width: {lg: '15.5%', xs: '75%'}, display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}

        >
            {lessonInfo ?
                <Stack direction={'column'} gap={'10px'} alignItems={'center'} sx={{
                    backgroundColor: 'white',
                    display: (isShown && isAdmin) ? 'none' : 'flex'
                }}
                >
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
                            boxSizing: 'border-box',

                        }}>
                            {lessonInfo?.name}
                        </Typography>
                    </Stack>

                    <Stack direction={'row'} gap={'6px'} alignItems={'center'}>
                        <SchoolIcon/>
                        {lessonInfo?.teacher}
                    </Stack>

                    <Stack direction={'row'} alignItems={'center'}>

                        <Link target={'_blank'} href={lessonInfo?.link}>
                            <Button variant="contained" sx={{width: '180px', gap: '8px'}}>
                                <InsertLinkIcon/>
                                Link
                            </Button>
                        </Link>

                    </Stack>

                </Stack> :

                <Typography variant={'h5'} sx={{ display: (isShown && isAdmin) ? 'none' : 'flex'}}
                >
                    Немає заняття
                </Typography>
            }

            {
                (isAdmin && isShown) ? lessonInfo ? <Stack direction={'row'} gap={"20px"}>
                        <EditCard/>
                        <DeleteCard/>
                    </Stack> :
                    <Stack>
                        <AddCard/>
                    </Stack> : null
            }

        </Item>
    );
};

export {LessonCard};

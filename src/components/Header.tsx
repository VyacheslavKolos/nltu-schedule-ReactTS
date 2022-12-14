import React, {FC, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import nltuIcon from '../images-assets/nltu-icon.png'
import GroupChooser from "./GroupChooser";
import {NavigationBar} from "./NavigationBar/NavigationBar";

const Header: FC = () => {

    const [isScheduleOrSessionSelected, setIsScheduleOrSessionSelected] = useState(true)

    return (
        <Box p={'16px 70px 28px'} margin={'0 auto'}>

            <Stack direction={'row'} justifyContent={'space-around'}>
                <img style={{width: '140px', height: '160px'}} src={nltuIcon} alt="nltuIcon"/>

                <Stack direction={'column'} gap={'20px'}>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant={'h4'}
                                    sx={{borderBottom: isScheduleOrSessionSelected ? 'solid black 3px' : 'none'}}
                                    onClick={() => {
                                        setIsScheduleOrSessionSelected(true)
                                    }}>
                            <Link to={'/'} style={{textDecoration: "none", color: 'black', fontWeight: 'bold'}}>Розклад
                                занять</Link>
                        </Typography>

                        <Typography variant={'h4'}
                                    sx={{borderBottom: !isScheduleOrSessionSelected ? 'solid black 3px' : 'none'}}
                                    onClick={() => {
                                        setIsScheduleOrSessionSelected(false)
                                    }}>
                            <Link to={'/session'} style={{textDecoration: "none", color: 'black', fontWeight: 'bold'}}>Розклад
                                сесії</Link>
                        </Typography>
                    </Stack>

                    <Stack direction={'row'} gap={'15px'} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant={'h6'} fontSize={'20px'}>
                            Розклад занять для :
                        </Typography>
                        <GroupChooser/>
                    </Stack>

                    <NavigationBar/>

                </Stack>

                <Stack direction={'column'} alignItems={'center'}>
                    <Typography fontFamily={'Snell Roundhand, cursive'} fontSize={'16px'}>
                        Made by
                    </Typography>
                    <Typography fontFamily={'Snell Roundhand, cursive'} fontSize={'16px'}>
                        Vyacheslav Kolos
                    </Typography> </Stack>

            </Stack>

        </Box>
    )
        ;
};

export {Header};

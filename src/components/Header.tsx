import React, {FC, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import nltuIcon from '../images-assets/nltu-icon.png'
import GroupChooser from "./GroupChooser";
import {NavigationBar} from "./NavigationBar/NavigationBar";
import Avatar from '@mui/material/Avatar';
import DayChooser from "./DayChooser";

const Header: FC = () => {

    const [isScheduleOrSessionSelected, setIsScheduleOrSessionSelected] = useState(true)

    return (
        <Box p={'16px 70px 28px'} margin={'0 auto'}>

            <Stack direction={'row'} justifyContent={'space-around'}>
                <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                    <img style={{width: '140px', height: '160px'}} src={nltuIcon} alt="nltuIcon"/>
                </Box>

                <Stack direction={'column'} gap={'20px'}>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography
                            sx={{
                                borderBottom: isScheduleOrSessionSelected ? 'solid black 3px' : 'none',
                                fontSize: {xs: '22px', lg: '32px'}

                            }}
                            onClick={() => {
                                setIsScheduleOrSessionSelected(true)
                            }}>
                            <Link to={'/'} style={{textDecoration: "none", color: 'black', fontWeight: 'bold'}}>Розклад
                                занять</Link>
                        </Typography>

                        <Typography
                            sx={{
                                borderBottom: !isScheduleOrSessionSelected ? 'solid black 3px' : 'none',
                                fontSize: {xs: '22px', lg: '32px'}
                            }}
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

                    <Stack direction={'row'} gap={'15px'} justifyContent={'center'} alignItems={'center'}
                           sx={{
                               display: {xs: 'flex', lg: 'none'}
                           }}
                    >
                        <Typography variant={'h6'} fontSize={'20px'}>
                            Оберіть день :
                        </Typography>
                        <DayChooser/>
                    </Stack>

                    <NavigationBar/>

                </Stack>

                <Stack direction={'column'} alignItems={'center'} sx={{display: {xs: 'none', lg: 'block'}}}>
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

import React from 'react';
import {Box, Stack} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {setIsPublishedEvent} from "../../store/slices";
import {ActiveButton} from "../ActiveButton/ActiveButton";
import {InActiveButton} from "../InActiveButton/InActiveButton";


const NavigationBar = () => {

    const {isPublished} = useAppSelector(state => state.lessonReducer)

    const dispatch = useAppDispatch();

    const changePublished = (bool: boolean) => {
        dispatch(setIsPublishedEvent(bool))
    }


    return (
        <Box >

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}
                   sx={{justifyContent: {lg: 'space-between', xs: 'center'}}}>
                <Stack justifyContent={'center'}
                       bgcolor={'#E9E9E9'} sx={{
                    width: {lg: '557px', xs: '357px'},
                    height: {lg: '71px', xs: '132px'},
                    borderRadius: {lg: '47px', xs: '18px'}
                }}>
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{
                        flexDirection: {lg: 'row', xs: 'column'},
                        gap: {lg: '30px', xs: '16px'},
                        height: {lg: '71px', xs: '132px'},
                        width: {lg: '557px', xs: '357px'}
                    }}>

                        <Box>
                            {isPublished ? <ActiveButton changePublished={changePublished} name={'Чисельник'}/> :
                                <InActiveButton changePublished={changePublished} status={true} name={'Чисельник'}/>
                            }
                        </Box>

                        <Box>
                            {isPublished ?
                                <InActiveButton changePublished={changePublished} status={false}
                                                name={'Знаменник'}/> :
                                <ActiveButton changePublished={changePublished} name={'Знаменник'}/>
                            }
                        </Box>

                    </Stack>
                </Stack>

            </Stack>

        </Box>
    );
};

export {NavigationBar};

// import * as React from 'react';
// import {styled} from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import {Stack, Typography} from "@mui/material";
//
// const Item = styled(Paper)(({theme}) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(3),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     width: '80%'
// }));
//
// function FormRow() {
//     return (
//         <React.Fragment>
//             <Stack flexDirection={'column'} width={'100%'} pb={'30px'}>
//                 8:30
//                 ------
//                 <Stack flexDirection={'row'}>
//
//                     <Grid item xs={2.4}>
//                         <Item>Item1</Item>
//                     </Grid>
//                     <Grid item xs={2.4}>
//                         <Item>Item2</Item>
//                     </Grid>
//                     <Grid item xs={2.4}>
//                         <Item>Item</Item>
//                     </Grid>
//                     <Grid item xs={2.4}>
//                         <Item>Item</Item>
//                     </Grid>
//                     <Grid item xs={2.4}>
//                         <Item>Item</Item>
//                     </Grid></Stack>
//
//             </Stack>
//         </React.Fragment>
//     );
// }
//
// const ScheduleGrid = () => {
//     return (
//         <Box p={'48px 20px 7rem 50px'} m={'36px 24px 64px'} sx={{
//             borderRadius: '40px',
//             bgcolor: 'rgba(255, 255, 255, 0.5)',
//             boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 12px',
//             flexGrow: 1
//         }}>
//             <Grid container spacing={1}>
//
//                 <Grid container item spacing={6}>
//                    <Stack flexDirection={'row'} gap={'230px'}>
//                        <Typography>Понеділок</Typography>
//                        <Typography>Понеділок</Typography>
//                        <Typography>Понеділок</Typography>
//                        <Typography>Понеділок</Typography>
//                        <Typography>Понеділок</Typography>
//                    </Stack>
//                 </Grid>
//
//                 <Grid container item spacing={3}>
//                     <FormRow/>
//                 </Grid>
//
//
//
//                 <Grid container item spacing={3}>
//                     <FormRow/>
//                 </Grid>
//
//
//                 <Grid container item spacing={3}>
//                     <FormRow/>
//                 </Grid>
//
//
//                 <Grid container item spacing={3}>
//                     <FormRow/>
//                 </Grid>
//
//
//                 <Grid container item spacing={3}>
//                     <FormRow/>
//                 </Grid>
//
//             </Grid>
//         </Box>
//     );
// }
//
// export default ScheduleGrid;


import React from 'react';
import {Box} from "@mui/material";
import {NumeratorLessonsSchedule} from "../../data/lessonsSchedule/lessonsSchedule";

const ScheduleGrid = () => {

    const {group, schedule} = NumeratorLessonsSchedule[0];

    return (
        <Box height={400} display={'grid'}
             sx={{pl: '100px', position: 'relative', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px 1.5rem'}}>
            {
                schedule.map(day => (
                    <Box>
                        <Box sx={{fontWeight: 600, fontSize: '16px', zIndex: 2, color: 'rgb(20, 21, 24);'}}>
                            {day.day}
                        </Box>

                        <Box sx={{position: 'relative', alignSelf: 'start', gridColumn: '1 / -1'}}>
                            <Box left={'-90px'} right={'0px'} top={'-17px'} position={'absolute'}
                                 sx={{display: 'flex', alignItems: 'center'}}>
                                <Box sx={{
                                    width: '64px',
                                    height: '36px',
                                    background: 'black',
                                    borderRadius: '42px',
                                    color: 'white',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {day.lessons.map(time => (
                                        <p>8:30</p>
                                    ))}
                                </Box>
                                <Box sx={{
                                    borderTop: '1px dashed rgb(20, 21, 24)', borderTopWidth: '1px',
                                    borderTopStyle: 'dashed', borderTopColor: 'black', width: '100%'
                                }}>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                ))
            }

        </Box>
    );
};

export default ScheduleGrid;
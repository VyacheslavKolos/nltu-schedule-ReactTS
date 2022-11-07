import React from 'react';
import {Box} from "@mui/material";
import ScheduleGrid from "./ScheduleGrid/ScheduleGrid";

const Schedule = () => {
    return (
        <Box sx={{
            background: 'linear-gradient(90deg, rgba(252,196,208,1) 21%, rgba(159,192,198,1) 55%, rgba(89,95,221,1) 80%)'
        }}>
            <Box pt={'2px'} pb={'1px'}>
                <ScheduleGrid/>
            </Box>

        </Box>
    );
};

export default Schedule;

import React from 'react';
import {Box} from "@mui/material";
import ScheduleGrid from "./ScheduleGrid/ScheduleGrid";

const Schedule = () => {
    return (
        <Box sx={{
            background: 'linear-gradient(90deg, rgba(253,239,242,1) 21%, rgba(0,220,255,1) 55%, rgba(135,140,255,1) 80%)'
        }}>
            <Box pt={'2px'}>
                <ScheduleGrid/>
            </Box>

        </Box>
    );
};

export default Schedule;

import React, {FC} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import nltuIcon from '../images-assets/nltu-icon.png'

const Header: FC = () => {
    return (
        <Box >
            <img style={{width:'92px', height:'92px'}} src={nltuIcon} alt="nltuIcon"/>

            <Stack>
                <Typography>
                    <Link to={'/'}>Розклад занять</Link>
                </Typography>

                <Typography>
                    <Link to={'/session'}>Розклад сесії</Link>
                </Typography>
            </Stack>

            <Stack>

            </Stack>
        </Box>
    )
        ;
};

export {Header};

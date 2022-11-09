import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Stack, Typography} from "@mui/material";


const GroupChooser = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: 'black', backgroundColor: 'rgb(239, 240, 248)', width: '200px'}}
            >
                <Stack direction={'row'} justifyContent={'space-between'} width={'95%'}>
                    <Typography>
                        КН-31/2
                    </Typography>
                    <KeyboardArrowDownIcon/>
                </Stack>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} sx={{width:'200px'}}>КН-31/1</MenuItem>
                <MenuItem onClick={handleClose}>КН-31/2</MenuItem>
                {/*<MenuItem onClick={handleClose}>Logout</MenuItem>*/}
            </Menu>
        </div>
    );
}

export default GroupChooser;



import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useForm, Controller} from "react-hook-form";
import {Box, MenuItem, Stack} from "@mui/material";
import {FC} from "react";
import EditSharpIcon from '@mui/icons-material/EditSharp';

import {useAppDispatch} from "../../hooks";
// import {EditEventThunk} from "../store/slices";


const EditCard: FC = () => {

    const {handleSubmit, control} = useForm({mode: "onChange", defaultValues: {title: ""}})

    const dispatch = useAppDispatch();

    const submit = (event: any) => {
        // event.isPublished = false;
        // event.time = value;
        // if (
        //     event.title === '' || event.time === '') {
        //     alert("please enter some information")
        // } else {
        //     console.log(event);
        //     dispatch(EditEventThunk({id,event}))
        // }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
        <Box >
            <Box onClick={handleClickOpen} sx={{gap: '8px', pl: '4px'}}><EditSharpIcon fontSize={'large'}/></Box>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit(submit)}>
                    <DialogTitle>Edit event</DialogTitle>
                    <DialogContent>

                        <Stack width={'300px'} gap={'30px'}>
                            <Controller control={control} render={({field: {ref, ...field}}) => <TextField
                                {...field}
                                inputRef={ref}
                                autoFocus
                                margin="dense"
                                id="title"
                                label="Event description"
                                type="text"
                                fullWidth
                                variant="standard"
                            />} name={"title"}
                            />

                        </Stack>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type={"submit"} onClick={handleClose}>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
};

export {EditCard};

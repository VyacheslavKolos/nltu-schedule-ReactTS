import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useForm, Controller} from "react-hook-form";
import {Box, FormControlLabel, RadioGroup, Stack} from "@mui/material";
import {FC} from "react";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {useAppDispatch} from "../../hooks";
// import {EditEventThunk} from "../store/slices";


const AddCard: FC = () => {

    const {handleSubmit, control} = useForm({mode: "onChange", defaultValues: {name: "", teacher: "", link: "", type:""}})

    const dispatch = useAppDispatch();

    const submit = (event: any) => {
        if (
            event.lessonName === '' || event.time === '') {
            alert("please enter some information")
        } else {
            console.log(event);
            // dispatch(EditEventThunk({id,event}))
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <Box>
            <Box onClick={handleClickOpen} sx={{gap: '8px', pl: '4px'}}><AddCircleSharpIcon fontSize={'large'}/></Box>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit(submit)}>
                    <DialogTitle>Add Lesson</DialogTitle>
                    <DialogContent>

                        <Stack width={'300px'} gap={'30px'}>

                            <Controller control={control} render={({field: {ref, ...field}}) =>
                                <TextField
                                    {...field}
                                    inputRef={ref}
                                    autoFocus
                                    margin="dense"
                                    id="title"
                                    label="Lesson name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />}
                                        name={"name"}
                            />

                            <Controller control={control} render={({field: {ref, ...field}}) =>
                                <TextField
                                    {...field}
                                    inputRef={ref}
                                    autoFocus
                                    margin="dense"
                                    id="Teacher"
                                    label="Teacher"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />}
                                        name={"teacher"}
                            />

                            <Controller control={control} render={({field: {ref, ...field}}) =>
                                <TextField
                                    {...field}
                                    inputRef={ref}
                                    autoFocus
                                    margin="dense"
                                    id="link"
                                    label="Link"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />}
                                        name={"link"}
                            />

                            <section>

                                <Controller
                                    render={({ field }) => (
                                        <RadioGroup aria-label="gender" {...field}>
                                            <FormLabel >Lesson type:</FormLabel>
                                            <FormControlLabel
                                                value="Лекція"
                                                control={<Radio />}
                                                label="Лекція"
                                            />
                                            <FormControlLabel value="Лабораторне" control={<Radio />} label="Лабораторне" />
                                        </RadioGroup>
                                    )}
                                    name="type"
                                    control={control}
                                />
                            </section>


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

export {AddCard};

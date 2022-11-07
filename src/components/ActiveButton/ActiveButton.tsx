import React, {FC} from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useAppSelector} from "../../hooks";

interface IProps {
    (bool: boolean): void;
}

const ActiveButton: FC<{ changePublished: IProps, name: string }> = ({changePublished, name}) => {

    const {isNumerator} = useAppSelector(state => state.lessonReducer)

    return (
        <Button variant="contained"

                onClick={() => changePublished(isNumerator)}
                sx={{
                    width: {lg:'256px',xs:'328px'},
                    height: '46px',
                    borderRadius: '61px',
                }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                               fontWeight={600} fontSize={'24px'}
                               color={'#FFFFFF'} lineHeight={'29px'}
                               textTransform={'none'}>{name}</Typography></Button>
    );
};

export {ActiveButton};

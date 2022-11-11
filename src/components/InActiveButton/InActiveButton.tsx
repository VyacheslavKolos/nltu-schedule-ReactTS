import React, {FC} from 'react';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";

interface IProps {
    (bool: boolean): void;
}

const InActiveButton : FC<{ changeNumerator: IProps ,status:boolean, name:string}> = ({changeNumerator,status,name}) => {
    return (
        <Button variant="text"
                onClick={() => changeNumerator(status)}
                sx={{
                    width: {lg:'256px',xs:'328px'},
                    height: '46px',
                    color: '#000000',

                }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                               fontWeight={600}
                               fontSize={'24px'}
                               color={'#000000'} lineHeight={'29px'}
                               textTransform={'none'}>{name}</Typography></Button>
    );
};

export  {InActiveButton};

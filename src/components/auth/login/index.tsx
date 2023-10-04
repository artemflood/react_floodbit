import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setPassword, setEmail, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Авторизація
            </Typography>
            <Typography variant="body1" marginBottom={2} fontFamily='Poppins' textAlign='center'>Введіть ваш логін і пароль
            </Typography>
            <TextField   fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Ввeдіть ваш email' onChange={(e) => setEmail(e.target.value)}/>
            <TextField  type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введіть ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily:'Poppins',marginBottom: 2, marginTop: 2, width: '60%'}} variant="contained">Ввійти</Button>
            <Typography variant="body1" fontFamily='Poppins' sx={{fontFamily: 'Poppins'}}>У вас нема аккаунту?<span className='incitingText' onClick={() => navigate('/register')}>Реєстрація</span>
            </Typography>
        </>
    );
};

export default LoginPage;
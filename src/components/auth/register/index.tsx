import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setEmail, setPassword, setRepeatPassword, setFirstName, setUsername, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Реєстрація
            </Typography>
            <Typography variant="body1" marginBottom={2} fontFamily='Poppins' textAlign='center'>Введіть дані для реєстрації
            </Typography>
            <TextField   fullWidth={true} margin='normal' label="Ім'я" variant="outlined" placeholder="Ввeдіть ваше Ім'я"
            onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField   fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Ввeдіть ваш username'
                         onChange={(e) => setUsername(e.target.value)}/>
            <TextField   fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Ввeдіть ваш email'
                         onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введіть ваш пароль'
                       onChange={(e) => setPassword(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Повторіть ваш пароль'
                       onChange={(e) => setRepeatPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily:'Poppins',marginBottom: 2, marginTop: 2, width: '60%'}} variant="contained">Реєстрація</Button>
            <Typography variant="body1" fontFamily='Poppins' sx={{fontFamily: 'Poppins'}}>У вас є Аккаунт?<span className='incitingText' onClick={() => navigate('/login')}>Авторизація</span>
            </Typography>
        </>
    );
};

export default RegisterPage;
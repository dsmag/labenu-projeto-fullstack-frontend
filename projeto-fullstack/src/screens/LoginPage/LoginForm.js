import React, { useState } from 'react'
import {
    TextField,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    CircularProgress,
    FormControl,
    InputLabel
} from '@material-ui/core';
import {
    Visibility, 
    VisibilityOff
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {login} from '../../services/user'
import {FormContainer} from './styled'

const LoginForm = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const [form, handleInputChange] = useForm({
        emailOrNickname: "",
        password: ""
    })
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onClickLogin = (event) => {
        event.preventDefault()
        const element = document.getElementById("login_form")
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
            login(form, history, props.setButtonName, setIsLoading)
        }
    }

    return (        
        <FormContainer id={"login_form"}>
            <TextField 
                value={form.emailOrNickname}
                name={"emailOrNickname"}
                onChange={handleInputChange}
                label={"Email / Nickname"}
                variant={"outlined"}
                type={"text"}
                required
                autoFocus
                fullWidth
            />
            
            <FormControl variant="outlined">
                <InputLabel>Senha</InputLabel>
                <OutlinedInput
                    id="filled-adornment-password"
                    value={form.password}
                    name={"password"}
                    onChange={handleInputChange}
                    label={"Senha"}
                    variant={"outlined"}
                    type={showPassword ? 'text' : 'password'}          
                    required                
                    fullWidth
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>    

            <Button
                onClick={onClickLogin}
                color={"primary"}
                variant={"contained"}
                type={"submit"} 
                fullWidth
            >
                {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Fazer Login</>}
            </Button>

        </FormContainer>        
    )
}

export default LoginForm;
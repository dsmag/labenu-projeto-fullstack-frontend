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
import {signUp} from '../../services/user'
import {FormContainer} from './styled'

const SignUpForm = (props) => {
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [form, handleInputChange] = useForm({
        name: "",
        email: "", 
        nickname: "", 
        password: ""
    })
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handlePassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const onClickSignUp = (event) => {
        event.preventDefault()
        const element = document.getElementById("signup_form")
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
            if (form.password === confirmPassword) {
                signUp(form, history, props.setButtonName, setIsLoading)
                console.log(form)
            } else {
                alert("Senhas diferentes.")
            }
        }        
    }    

    return (        
        <FormContainer id={"signup_form"}>
            <TextField 
                value={form.name}
                name={"name"}
                onChange={handleInputChange}
                label={"Nome"}
                variant={"outlined"}
                type={"text"}
                required
                autoFocus
                fullWidth
            />
            <TextField 
                value={form.email}
                name={"email"}
                onChange={handleInputChange}
                label={"Email"}
                variant={"outlined"}
                type={"email"}
                required
                fullWidth
            />
            <TextField 
                value={form.nickname}
                name={"nickname"}
                onChange={handleInputChange}
                label={"Nickname"}
                variant={"outlined"}
                type={"text"}
                required
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
                    minLength={"6"}                
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

            <FormControl variant="outlined">
                <InputLabel>Confirmar senha</InputLabel>
                <OutlinedInput
                    id="confirm"
                    value={confirmPassword}
                    name={"password"}
                    onChange={handlePassword}
                    label={"Confirmar senha"}
                    variant={"outlined"}
                    type={showConfirmPassword ? 'text' : 'password'}          
                    required                
                    fullWidth
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>     

            <Button
                onClick={onClickSignUp}
                color={"primary"}
                variant={"contained"}
                type={"submit"} 
                fullWidth
            >
                {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>CADASTRAR</>}
            </Button>

        </FormContainer>        
    )
}

export default SignUpForm;
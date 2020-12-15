import React from 'react'
import LoginForm from './LoginForm'
import useChangePageTitle from '../../hooks/useChangePageTitle'
// import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {PageContainer} from './styled'
import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/Coordinator'

const LoginPage = (props) => {
    useChangePageTitle("Login")
    // useUnprotectedPage()
    const history = useHistory()

    return (
        <PageContainer>
            <Typography color={"primary"} align={"center"}>Entrar</Typography>
            <LoginForm setButtonName={props.setButtonName} />
            <Button 
                onClick={() => goToSignUpPage(history)}
                color={"primary"}
                variant={"text"}
                type={"submit"}
                size="small" 
            >
                Não tem cadastro? Clique aqui!
            </Button>
        </PageContainer>
    )
}

export default LoginPage;
import React from 'react'
import SignUpForm from './SignUpForm'
import useChangePageTitle from '../../hooks/useChangePageTitle'
import {PageContainer} from './styled'
import { Typography } from '@material-ui/core'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = (props) => {
    useChangePageTitle("Cadastro")
    useUnprotectedPage()

    return (
        <PageContainer>
            <Typography color={"primary"} align={"center"}>Cadastro</Typography>
            <SignUpForm setButtonName={props.setButtonName} />
        </PageContainer>
    )
}

export default SignUpPage;
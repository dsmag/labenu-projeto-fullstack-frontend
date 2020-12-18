import React from 'react'
import { Typography } from '@material-ui/core'
import {ErrorPageContainer} from './styled'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <Typography color={"primary"} variant={"h5"} align={"center"}>ERRO 404</Typography>
            <Typography variant={"h6"} align={"center"}>Página não encontrada...</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;
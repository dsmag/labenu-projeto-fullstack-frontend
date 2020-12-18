import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useChangePageTitle from '../../hooks/useChangePageTitle'
import {PageContainer} from './styled'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import CreateImageForm from './CreateImageForm'

const CreateImagePage = () => {
    useProtectedPage()
    useChangePageTitle("Adicionar imagem")
    const history = useHistory()

    return (
        <PageContainer>
            <Typography color={"primary"} align={"center"}>Adicione sua imagem:</Typography>
            <CreateImageForm/>
        </PageContainer>
    )
}

export default CreateImagePage;
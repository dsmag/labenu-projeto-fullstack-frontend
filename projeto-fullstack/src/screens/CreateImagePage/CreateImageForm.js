import React, { useState } from 'react'
import {TextField, Button, CircularProgress} from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {createImage} from '../../services/image'
import {FormContainer} from './styled'

const CreateImageForm = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    const [form, handleInputChange] = useForm({
        subtitle: "",
        file: "", 
        tags: "", 
        collection: ""
    })

    const onClickAddImage = (event) => {
        event.preventDefault()
        const element = document.getElementById("add_image_form")
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
            createImage(form, headers, setIsLoading, history)
        }        
    }

    return (        
        <FormContainer id={"add_image_form"}>
            <TextField 
                value={form.subtitle}
                name={"subtitle"}
                onChange={handleInputChange}
                label={"Legenda"}
                variant={"outlined"}
                type={"text"}
                inputProps={{ maxLength: 30 }}    
                required
                autoFocus
                fullWidth
            />
            <TextField 
                value={form.file}
                name={"file"}
                onChange={handleInputChange}
                label={"URL"}
                variant={"outlined"}
                type={"text"}
                required
                fullWidth
            />
            <TextField 
                value={form.tags}
                name={"tags"}
                onChange={handleInputChange}
                label={"Tag"}
                placeholder="tagUm, tagDois"
                helperText="Use vírgulas para separar as tags."
                variant={"outlined"}
                type={"text"}
                inputProps={{ maxLength: 30 }}
                required
                fullWidth
            />
            <TextField 
                value={form.collection}
                name={"collection"}
                onChange={handleInputChange}
                label={"Coleção"}
                variant={"outlined"}
                type={"text"}
                required
                fullWidth
            />   

            <Button
                onClick={onClickAddImage}
                color={"primary"}
                variant={"contained"}
                type={"submit"} 
                fullWidth
            >
                {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>ADICIONAR</>}
            </Button>

        </FormContainer>        
    )
}

export default CreateImageForm;
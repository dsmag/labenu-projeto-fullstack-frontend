import React from "react"
import {Button, Icon} from './styled'
import {AddPhotoAlternateOutlined} from '@material-ui/icons'
import { IconButton } from "@material-ui/core"
import { goToAddImagePage } from "../../routes/Coordinator"
import { useHistory } from 'react-router-dom'

const ButtonNewImage = () => {
    const history = useHistory()

    return (
    <Button onClick={() => goToAddImagePage(history)}>
        <Icon>
            <IconButton edge="end" size="medium"> 
                <AddPhotoAlternateOutlined/> 
            </IconButton>  
        </Icon>
    </Button>
    )  
}
  
export default ButtonNewImage;
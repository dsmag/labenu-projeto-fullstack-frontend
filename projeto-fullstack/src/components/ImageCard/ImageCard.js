import React from 'react'
import {Card, Img, Box, Subtitle} from './styled'
import { goToDetailPage } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'

const ImageCard = (props) => {
    const history = useHistory()

    return(
        <Card onClick={() =>  goToDetailPage(history, props.id)}>
            <Img src={props.src} />
            <Box>
                <Subtitle>{props.subtitle}</Subtitle>
            </Box>   
        </Card>
        
    )
}

export default ImageCard;
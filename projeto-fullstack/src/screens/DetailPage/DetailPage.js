import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useChangePageTitle from '../../hooks/useChangePageTitle'
import { PageContainer, Card, ImageContainer, Img, InfoContainer, TagsContainer, Text } from './styled'
import { getImageById } from '../../services/image'


const DetailPage = () => {
    useProtectedPage()
    useChangePageTitle("Detalhes")

    const pathParams = useParams();
    const id = pathParams.id
    const [image, setImage] = useState({})

    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    useEffect(() => {
        getImageById(headers, id, setImage)
    }, [])

    const renderTags = () => {
        if (image.tags) {
            return image.tags.map(tag => {
                return <Text>#{tag}</Text>
            })  
        }
    }

    return (
        <PageContainer>
            <Card>
                <ImageContainer>
                    <Img src={image.file} />
                </ImageContainer>
                <InfoContainer>
                    <Text><b>{image.subtitle}</b></Text>
                    <TagsContainer>
                        {renderTags()}
                    </TagsContainer>
                    <Text>{image.collection}</Text>
                    <Text>Por <i>{image.authorName}</i></Text>
                </InfoContainer> 
            </Card>                       
        </PageContainer>
    )
}

export default DetailPage;
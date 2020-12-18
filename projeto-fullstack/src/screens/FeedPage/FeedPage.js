import React, { useState, useEffect } from 'react'
import {PageContainer} from './styled'
import ImageCard from '../../components/ImageCard/ImageCard'
import {getAllImages} from '../../services/image'
import ButtonNewImage from '../../components/ButtonNewImage/ButtonNewImage'
import useProtectedPage from '../../hooks/useProtectedPage'
import useChangePageTitle from '../../hooks/useChangePageTitle'

const FeedPage = () => {
    useProtectedPage()
    useChangePageTitle("Feed")

    const [ images, setImages ] = useState([])
    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    useEffect(() => {
        getAllImages(headers, setImages)
    }, [])

    const renderCard = () => {
        if (images.length > 0) {
            return images.map(image => {
                return (
                    <ImageCard
                        id={image.id}
                        src={image.file}
                        subtitle={image.subtitle}
                    />
                )
            })
        }
    }

    return (
        <PageContainer>
            {renderCard()}
            <ButtonNewImage/>
        </PageContainer>
    )
}

export default FeedPage;
import axios from 'axios'
import { BASE_URL } from '../constants/axiosConstants'
import { goToFeedPage } from '../routes/Coordinator';

export const getAllImages = (headers, setImages) => {

    axios.get(`${BASE_URL}/image/all`, headers)
        .then((response) => {
            console.log(response)
            setImages(response.data.allImages)
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getImageById = (headers, id, setImage) => {

    axios.get(`${BASE_URL}/image/${id}`, headers)
        .then((response) => {
            console.log(response)
            setImage(response.data.image)
        })
        .catch((error) => {
            console.log(error)
        })
}

export const createImage = (form, headers, setIsLoading, history) => {
    setIsLoading(true)

    const {subtitle, file, tags, collection} = form
    const arrayTags = tags.split(",")
    
    const body = {
        subtitle,
        file, 
        tags: arrayTags, 
        collection
    }
    
    axios.post(`${BASE_URL}/image/create`, body, headers)
        .then((response) => {
            console.log(response)
            alert("Imagem adicionada com sucesso!") 
            setIsLoading(false)
            goToFeedPage(history)
        })
        .catch((error) => {
            console.log(error)
            alert("Erro ao adicionar imagem, tente novamente.")
            setIsLoading(false)
        })
}


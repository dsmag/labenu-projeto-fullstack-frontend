import axios from 'axios'
import { BASE_URL } from '../constants/axiosConstants'
import { goToFeedPage } from '../routes/Coordinator'

export const login = (body, history, setButtonName, setIsLoading) => {

    setIsLoading(true)

    axios.post(`${BASE_URL}/user/login`, body)
        .then((response) => {
            console.log(response)            
            localStorage.setItem("token", response.data.token)            
            setIsLoading(false)            
            alert("Bem-vindo(a)!")
            goToFeedPage(history)            
            setButtonName("Logout")
        })
        .catch((error) => {
            console.log(error)
            setIsLoading(false)
            alert("Falha no login, tente novamente.")
        })
}

export const signUp = (body, history, setButtonName, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/user/signup`, body)
        .then((response)=>{
            localStorage.setItem('token', response.data.token)
            setIsLoading(false)
            alert("Cadastro realizado com sucesso! Bem-vindo(a)!")
            goToFeedPage(history)
            setButtonName("Logout")
        })
        .catch((error) => {
            console.log(error)
            setIsLoading(false)
            alert("Falha no cadastro, tente novamente.")
        })
}
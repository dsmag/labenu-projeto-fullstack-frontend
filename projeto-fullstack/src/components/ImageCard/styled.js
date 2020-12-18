import styled from 'styled-components'

export const Card = styled.div`
    width: 23%;

    @media(max-width: 1200px) {
        width: 30%;
    }

    @media(max-width: 750px) {
        width: 45%;
    }

    @media(max-width: 400px) {
        width: 90%;
    }
    
    position: relative;

    :hover {
        cursor: pointer;  
    }
`

export const Img = styled.img`
    width: 100%;
`

export const Box = styled.div`
    width: 100%;
    /* Limitar quantidade de caracteres do subtitle, tanto no input do formulario quando no DB */
    /* mudar background: fazer igual astromatch */
    /* background: rgb(142,143,143);
    background: linear-gradient(0deg, rgba(142,143,143,1) 0%, rgba(255,255,255,0.6278886554621849) 100%); */
    background-image: linear-gradient(180deg, grey, transparent);

    position: absolute;
    top: 0;
`

export const Subtitle = styled.p`
    margin: 0;
    padding: 10px;
    text-align: center;
    color: white;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
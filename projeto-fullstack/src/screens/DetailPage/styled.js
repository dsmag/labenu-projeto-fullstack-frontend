import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    margin-top: 100px;

    @media(max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: auto;
        margin-top: 100px;
    }
`

export const Card = styled.div`
    width: 80%;
    min-height: 100%;

    display: flex;
    justify-content: center;

    @media(max-width: 1000px) {
        width: 90%;
        min-height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    align-items: start;

    @media(max-width: 1000px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Img = styled.img`
    height: 100%;

    @media(max-width: 1000px) {
        width: 100%;
    }
`

export const InfoContainer = styled.div`
    width: 30%; 
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    @media(max-width: 1000px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }
`

export const TagsContainer = styled.div`
    margin: 0;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    @media(max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center; 
    }
`

export const Text = styled.div`
    margin: 0;
    padding: 5px;
`


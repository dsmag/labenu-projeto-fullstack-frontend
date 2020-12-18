export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}

export const goToFeedPage = (history) => {
    history.push('/feed')
}

export const goToDetailPage = (history, id) => {
    history.push(`/feed/${id}`)
}

export const goToAddImagePage = (history) => {
    history.push(`/feed/add-image`)
}
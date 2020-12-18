import { useEffect } from "react"

const useChangePageTitle = (title) => {
    useEffect(() => {
        document.title = `${title}`
    }, [title])
}

export default useChangePageTitle;
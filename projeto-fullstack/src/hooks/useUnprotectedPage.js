import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToFeedPage } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    
    if (token){
      goToFeedPage(history)
    }
  }, [history])
}

export default useUnprotectedPage;
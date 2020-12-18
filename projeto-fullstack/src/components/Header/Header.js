import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { goToFeedPage, goToLoginPage } from '../../routes/Coordinator'
import { ButtonContainer } from './styled'
import { Typography } from '@material-ui/core'

const Header = (props) => {
  const history = useHistory()
  const {buttonName, setButtonName} = props

  const logout = () => {
    localStorage.removeItem("token")
  }

  const handleButtonLogin = () => {
    const token = localStorage.getItem("token")

    if (token) {
      logout()
      setButtonName("Login") 
    }

    goToLoginPage(history)
  }

  return(
    <AppBar>
        <Toolbar>
          <ButtonContainer>
            <Button color={"inherit"} onClick={() =>  goToFeedPage(history)}>
              <Typography> LABEPHOTO </Typography> 
            </Button>
            <Button color={"inherit"} onClick={handleButtonLogin}>
            <Typography> {buttonName} </Typography> 
            </Button>
          </ButtonContainer>
        </Toolbar>
    </AppBar>
  )
}

export default Header
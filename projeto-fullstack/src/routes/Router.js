import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import DetailPage from '../screens/DetailPage/DetailPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import CreateImagePage from '../screens/CreateImagePage/CreateImagePage'

const Router = (props) => {
    return (
        <Switch>
            <Route exact path={'/login'} >
                <LoginPage setButtonName={props.setButtonName} />
            </Route>
            <Route exact path={'/cadastro'} >
                <SignUpPage setButtonName={props.setButtonName} />
            </Route>
            <Route exact path={['/feed', '/']} >
                <FeedPage />
            </Route>
            <Route exact path={'/feed/add-image'} >
                <CreateImagePage />
            </Route>
            <Route exact path={'/feed/:id'} >
                <DetailPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router
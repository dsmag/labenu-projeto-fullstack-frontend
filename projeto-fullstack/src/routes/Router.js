import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import DetailPage from '../screens/DetailPage/DetailPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/login'} >
                <LoginPage/>
            </Route>
            <Route exact path={'/cadastro'} >
                <SignUpPage />
            </Route>
            <Route exact path={['/feed', '/']} >
                <FeedPage />
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
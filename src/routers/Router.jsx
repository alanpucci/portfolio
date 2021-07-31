import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/views/Home'
import NavBar from '../components/organisms/NavBar'

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter

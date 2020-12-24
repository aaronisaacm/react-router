import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import MarvelScreen from '../components/marvel/marvelScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar></Navbar>

            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }></Route>
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen }></Route>
                    <Route exact path="/dc" component={ DcScreen }></Route>

                    <Redirect to="/marvel"></Redirect>
                </Switch>
            </div>
        </>
    )
}

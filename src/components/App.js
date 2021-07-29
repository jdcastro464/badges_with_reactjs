import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Layout from './Layout';
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                    <Route exact path="/badges/:idBadge" component={BadgeDetailsContainer}></Route>
                    <Route exact path="/badges/:idBadge/edit" component={BadgeEdit}></Route>
                    <Route path="/404" component={NotFound}></Route>
                    <Redirect from="*" to="/404"></Redirect>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
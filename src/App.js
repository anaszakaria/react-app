import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './router/index'
import './assets/css/app.css'

// MAIN COMPONENTS
import AppHeader from './components/AppHeader'
import LeftPanel from './components/LeftPanel'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageIndex: 0
        }
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
                <Router>
                    <LeftPanel />
                    <section className="main-content">
                            <Switch>
                                {
                                    routes.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    ))
                                }
                            </Switch>
                    </section>
                </Router>
            </div>
        )
    }
}

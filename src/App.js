import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// router
import routes from './router/index'

// main components
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
                    <section style={styles.mainContent}>
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

const styles = {
    mainContent: {
        float: 'left',
        background: '#F2F2F2',
        width: 'calc(100% - 300px)',
        height: 'calc(100% - 45px)'
    }
}

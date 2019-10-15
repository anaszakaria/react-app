import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// router
import routes from 'router/index'

// main components
import AppHeader from 'components/AppHeader'
import LeftPanel from 'components/LeftPanel'

// error page
import Error404 from 'views/Error404'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageIndex: 0
        }
    }

    componentDidMount() {
        console.log(process.env.REACT_APP_PUBLIC_URL)
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
                <Router basename={process.env.REACT_APP_PUBLIC_URL}>
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
                            <Route component={Error404} />
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
        overflow: 'auto',
        background: '#F2F2F2',
        width: 'calc(100% - 300px)',
        height: 'calc(100% - 45px)',
        minHeight: '600px'
    }
}

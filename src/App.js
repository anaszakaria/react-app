import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom'

// router
import routes from 'router/index'

// main components
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import LeftPanel from 'components/LeftPanel'
import UserStatus from 'components/UserStatus'
import Dashboard from 'views/Dashboard'

// error page
import Error404 from 'views/Error404'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'Anas',
                position: 'Lead Developer',
                isAuthenticated: false
            },
            loggedIn: false,
            info: {
                name: 'Anas',
                age: 39
            }
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="App">
                <Router basename={process.env.REACT_APP_PUBLIC_URL}>
                    <AppHeader />
                    <LeftPanel />
                    <section style={styles.mainContent}>
                        <UserStatus data={this.state}/>
                        <Switch>
                            <Route path="/dashboard/:id" render={(props) => this.state.user.isAuthenticated ?
                                (
                                    <Dashboard {...props} data={this.state} />
                                ) : (
                                    <Redirect to={{pathname: "/signin", state: { from: props.location }}}/>
                                )}
                            />
                            {
                                routes.map((route, index) => {
                                    return <Route path={process.env.PUBLIC_URL + route.path} key={index} exact render={(props) =>
                                        (
                                            <route.component {...props} data={this.state} />
                                        )
                                    }
                                    />
                                })
                            }
                            <Route render={(props) => <Error404 {...props} title={'Error 404 - Page Not Found'}/>} />
                        </Switch>
                    </section>
                </Router>
                <AppFooter />
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

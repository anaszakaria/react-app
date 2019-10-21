import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

// router
import routes from 'router/index'

// main components
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import LeftPanel from 'components/LeftPanel'
import UserStatus from 'components/UserStatus'
import SignIn from 'views/user/SignIn'

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
            }
        }
    }

    componentDidMount() {
        console.log(this.state)
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
                            <Route path="/signin">
                                <SignIn data={this.state}/>
                            </Route>
                            {
                                routes.map((route, index) => {
                                    if (route.access === 'public') {
                                        return <Route key={index} path={route.path} exact render={(props) =>
                                            (<route.component {...props} data={this.state} />)}
                                        />
                                    } else {
                                        return <Route key={index} path={route.path} render={(props) => this.state.user.isAuthenticated ?
                                            (
                                                <route.component {...props} data={this.state} />
                                            ) : (
                                                <Redirect to={{pathname: "/signin", state: { from: props.location }}}/>
                                            )}
                                        />
                                    }
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
        minHeight: '816px'
    },
    container: {
        padding: '12px',
        textAlign: 'center'
    }
}

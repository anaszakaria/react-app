import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom"

// router
import routes from 'router/index'

// main components
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import LeftPanel from 'components/LeftPanel'
import Dashboard from 'views/Dashboard'
import Contact from 'views/Contact'

// error page
import Error404 from 'views/Error404'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                        <AuthButton />
                        <Switch>
                            <Route path="/public">
                                <PublicPage />
                            </Route>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <PrivateRoute path="/protected/:id">
                                <ProtectedPage />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/:id">
                                <Dashboard />
                            </PrivateRoute>
                            <Route path="/contact/:id" render={(props) => fakeAuth.isAuthenticated ?
                                (
                                    <Contact {...props} data={this.state} />
                                ) : (
                                    <Redirect to={{pathname: "/login", state: { from: props.location }}}/>
                                )}
                            />
                            {
                                routes.map((route, index) => {
                                    return <Route
                                        key={index}
                                        path={process.env.PUBLIC_URL + route.path}
                                        exact
                                        component={route.component}
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

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

function AuthButton() {
    let history = useHistory()

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome!
            {" "}
            <button onClick={() => { fakeAuth.signout(() => history.push("/")) } }>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in</p>
    )
}

function PrivateRoute({ children, ...props }) {
    console.log(children, {...props})
    return (
        <Route
            {...props}
            render={({ location }) =>
            fakeAuth.isAuthenticated ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
            }
        />
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

class ProtectedPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 'tempID',
            user: 'No User',
            role: 'No Role'
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h3>Protected</h3>
                <p>ID: {this.state.id}</p>
                <p>User: {this.state.user}</p>
                <p>Role: {this.state.role}</p>
            </div>
        )
    }
}

function LoginPage() {
    let history = useHistory()
    let location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } }
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from)
        })
    }

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
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

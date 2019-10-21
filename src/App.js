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
import PageTitle from 'components/PageTitle'

// error page
import Error404 from 'views/Error404'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
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
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <Route path="/signin">
                                <SignIn />
                            </Route>
                            <Route path="/dashboard/:id" render={(props) => user.isAuthenticated ?
                                (
                                    <Dashboard {...props} data={this.state} />
                                ) : (
                                    <Redirect to={{pathname: "/signin", state: { from: props.location }}}/>
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

const user = {
    isAuthenticated: false,
    authenticate(cb) {
        user.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        user.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

function AuthButton() {
    let history = useHistory()

    return user.isAuthenticated ? (
        <p>
            Welcome!
            {" "}
            <button onClick={() => { user.signout(() => history.push("/")) } }>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in</p>
    )
}

function LoginPage() {
    let history = useHistory()
    let location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } }
    let login = () => {
        user.authenticate(() => {
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

function SignIn(props) {
    let history = useHistory()
    let location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } }
    let signIn = () => {
        user.authenticate(() => {
            history.replace(from)
        })
    }

    return (
        <div>
            <PageTitle title="Sign In" />
            <section style={styles.container}>
                <form>
                    <label>User:</label><br/>
                    <input type="text" name="username" /><br/>
                    <label>Password:</label><br/>
                    <input type="password" name="password" /><br/><br/>
                </form>
                <button onClick={signIn}>Log in</button>
            </section>
        </div>
    )
}

const styles = {
    mainContent: {
        float: 'left',
        overflow: 'auto',
        background: '#F2F2F2',
        width: 'calc(100% - 300px)',
        height: 'calc(100% - 45px)',
        minHeight: '600px'
    },
    container: {
        padding: '12px',
        textAlign: 'center'
    }
}

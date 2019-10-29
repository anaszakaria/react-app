import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { createStore } from 'redux'
import reducer from 'store/Reducer'

// router
import routes from 'router/index'

// main components
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import LeftPanel from 'components/LeftPanel'

// error page
import Error404 from 'views/Error404'

// init store
const store = createStore(reducer)

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
                <Provider store={store}>
                    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
                        <AppHeader user={this.state.user}/>
                        <LeftPanel />
                        <section style={styles.mainContent}>
                            <Switch>
                                {
                                    routes.map((route, index) => {
                                        return <Route key={index} path={route.path} exact render={(props) =>
                                            route.access === 'public' | this.state.user.isAuthenticated ?
                                            (
                                                <route.component {...props} data={this.state} />
                                            ) : (
                                                <Redirect to={{pathname: "/signin"}}/>
                                            )}
                                        />
                                    })
                                }
                                <Route render={(props) => <Error404 {...props} title={'Error 404 - Page Not Found'}/>} />
                            </Switch>
                        </section>
                    </Router>
                    <AppFooter />
                </Provider>
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

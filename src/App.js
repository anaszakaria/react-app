import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import routes from './router/index'
import './assets/css/app.css'

// MAIN COMPONENTS
import AppHeader from './components/AppHeader'
import LeftPanel from './components/LeftPanel'
import Welcome from './components/Welcome'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftpanel: false,
            leftMenuLists: [
                { id: 'list001', text: 'Home ', icon: 'mdi-home', url: '/'},
                { id: 'list002', text: 'About ', icon: 'mdi-home', url: '/about'},
                { id: 'list003', text: 'Contact ', icon: 'mdi-home', url: '/contact'},
                { id: 'list004', text: 'Dashboard ', icon: 'mdi-home', url: '/dashboard'}
            ]
        }
    }

    printList(text) {
        console.log(text)
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
                <Router>
                    <section className="left-panel">
                        <ul>
                            {
                                this.state.leftMenuLists.map(item => {
                                    return <li className="pointer" key={item.id} onClick={this.printList.bind(this, item.text)}>
                                        <Link to={item.url}>{item.text}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </section>
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

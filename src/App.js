import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './assets/css/app.css'
import AppHeader from './components/AppHeader'
import LeftPanel from './components/LeftPanel'
import Welcome from './components/Welcome'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Home'
import Dashboard from './views/Dashboard'

const routes = [
    {
        path: "/",
        exact: true,
        main: () => new Home()
    },
    {
        path: "/about",
        main: () => new About()
    },
    {
        path: "/contact",
        main: () => new Contact()
    },
    {
        path: "/dashboard",
        main: () => new Dashboard()
    }
]

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftpanel: false,
            menuLists: [
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
                                this.state.menuLists.map(item => {
                                    return <li className="pointer" key={item.id} onClick={this.printList.bind(this, item.text)}>
                                        <Link to={item.url}>{item.text}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </section>
                    <section className="main-content">
                            <Switch>
                                {routes.map((route, index) => (
                                  // You can render a <Route> in as many places
                                  // as you want in your app. It will render along
                                  // with any other <Route>s that also match the URL.
                                  // So, a sidebar or breadcrumbs or anything else
                                  // that requires you to render multiple things
                                  // in multiple places at the same URL is nothing
                                  // more than multiple <Route>s.
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                    </section>
                </Router>
            </div>
        )
    }
}

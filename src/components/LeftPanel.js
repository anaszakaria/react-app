import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Home'
import Dashboard from '../views/Dashboard'

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => Home
    },
    {
        path: "/about",
        sidebar: () => <div>about!</div>,
        main: () => About
    },
    {
        path: "/contact",
        sidebar: () => <div>contact!</div>,
        main: () => Contact
    },
    {
        path: "/dashboard",
        sidebar: () => <div>dashboard!</div>,
        main: () => Dashboard
    }
]

export default class LeftPanel extends Component {
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
            </Router>
        )
    }
}

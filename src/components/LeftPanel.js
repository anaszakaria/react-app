import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftpanel: true,
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
        )
    }
}

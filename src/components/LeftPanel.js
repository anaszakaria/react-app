import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../config/theme'

export default class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftpanel: true,
            menuLists: [
                { id: 'list001', text: 'Home ', icon: 'home', url: '/'},
                { id: 'list002', text: 'About ', icon: 'info', url: '/about'},
                { id: 'list003', text: 'Contact ', icon: 'phone', url: '/contact'},
                { id: 'list004', text: 'Dashboard ', icon: 'chart-line', url: '/dashboard/dash-001?user=Anas&role=admin'}
            ]
        }
    }

    printList(text) {
        console.log(text)
    }

    render() {
        return (
            <section style={styles.container}>
                <ul>
                    {
                        this.state.menuLists.map(item => {
                            return <li className="pointer" key={item.id} onClick={this.printList.bind(this, item.text)}>
                                <FontAwesomeIcon icon={item.icon} className="fa-fw" style={styles.icons}/>
                                <Link to={item.url}>{item.text}</Link>
                            </li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

const styles = {
    container: {
        float: 'left',
        overflow: 'auto',
        padding: '12px',
        color: '#FFF',
        background: theme.accentOrange,
        width: '300px',
        height: 'calc(100% - 45px)',
        minHeight: '600px'
    },
    icons: {
        marginRight: '12px'
    }
}

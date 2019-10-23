import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from 'config/theme'

export default class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftpanel: true,
            info: {
                category: 'Dev',
                tag: 'JS'
            },
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
                <InfoCenter>
                    <Info info={this.state.info} size="small" />
                </InfoCenter>
                <ul>
                    {
                        this.state.menuLists.map(item => {
                            return <li className="pointer" key={item.id} onClick={this.printList.bind(this, item.text)}>
                                <FontAwesomeIcon icon={item.icon} className="fa-fw" style={styles.icons}/>
                                <Link to={process.env.PUBLIC_URL + item.url}>{item.text}</Link>
                            </li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

function InfoCenter({ children }) {
    return (
        <div>
            <div style={styles.infoCenterContainer}>
                <span>Information Center</span>
            </div>
            {children}
        </div>
    )
}

function Info({ info }) {
    return (
        <div style={styles.infoContainer}>
            <span>{info.category} - {info.tag}</span>
        </div>
    )
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
        minHeight: '816px'
    },
    infoCenterContainer: {
        paddingBottom: '4px'
    },
    infoContainer: {
        background: '#402B53',
        padding: '4px'
    },
    icons: {
        marginRight: '12px'
    }
}

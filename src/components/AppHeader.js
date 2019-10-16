import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from 'config/theme'

export default class AppHeader extends Component {
    render() {
        return (
            <header style={styles.container}>
                <h2 style={styles.title}>CMIS</h2>
                <Link to={process.env.PUBLIC_URL + '/signin'}>
                    <FontAwesomeIcon icon="user" className="fa-fw" />
                </Link>
            </header>
        )
    }
}

const styles = {
    container: {
        padding: '12px',
        width: '100%',
        background: theme.primaryGreen,
        color: '#FFF'
    },
    title: {
        marginTop: '0px',
        marginBottom: '0px'
    }
}

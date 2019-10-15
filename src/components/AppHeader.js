import React, { Component } from 'react'
import theme from 'config/theme'

export default class AppHeader extends Component {
    render() {
        return (
            <header style={styles.container}>
                <h2 style={styles.title}>CMIS</h2>
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

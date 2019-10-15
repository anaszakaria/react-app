import React, { Component } from 'react'

export default class AppHeader extends Component {
    render() {
        return (
            <header style={styles.container}>
                <h2 style={styles.h2}>CMIS</h2>
            </header>
        )
    }
}

const styles = {
    container: {
        padding: '12px',
        width: '100%',
        background: '#333333',
        color: '#FFF'
    },
    h2: {
        marginTop: '0px',
        marginBottom: '0px'
    }
}

import React from 'react'
import theme from 'config/theme'

function AppFooter(props) {
    return (
        <footer style={styles.footer}>
            <p style={styles.content}>Copyright @2019</p>
        </footer>
    )
}

export default AppFooter

const styles = {
    footer: {
        padding: '12px',
        color: '#FFF',
        background: theme.primaryDarkGrey,
        position: 'fixed',
        bottom: '0',
        width: '100%',
        textAlign: 'right'
    },
    content: {
        margin: '0'
    }
}

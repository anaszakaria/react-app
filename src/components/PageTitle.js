import React from 'react'
import theme from '../config/theme'

function PageTitle(props) {
    return (
        <section style={styles.container}>
            <h4 style={styles.title}>{props.title}</h4>
        </section>
    )
}

export default PageTitle

const styles = {
    container: {
        padding: '12px',
        background: theme.neutral
    },
    title: {
        marginTop: '0',
        marginBottom: '0'
    }
}

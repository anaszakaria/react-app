import React from 'react'

function PageTitle(props) {
    return (
        <section style={styles.container}>
            <h3 style={styles.h3}>{props.title}</h3>
        </section>
    )
}

export default PageTitle

const styles = {
    container: {
        padding: '12px',
        background: 'green'
    },
    h3: {
        marginTop: '0',
        marginBottom: '0'
    }
}

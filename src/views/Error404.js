import React from 'react'

function Error404(props) {
    return (
        <section style={styles.container}>
            <h1>{props.title}</h1>
        </section>
    )
}

export default Error404

const styles = {
    container: {
        padding: '12px'
    }
}

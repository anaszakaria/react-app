import React from 'react'
import PageTitle from '../components/PageTitle'

function About() {
    return (
        <div>
            <PageTitle title="About" />
            <section style={styles.container}>
                <p>This is the about Page</p>
            </section>
        </div>
    )
}

export default About

const styles = {
    container: {
        padding: '12px'
    }
}

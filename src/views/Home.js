import React from 'react'
import PageTitle from '../components/PageTitle'

function Home() {
    return (
        <div>
            <PageTitle title="Home" />
            <section style={styles.container}>
                <p>This is the about Home</p>
            </section>
        </div>
    )
}

export default Home

const styles = {
    container: {
        padding: '12px'
    }
}

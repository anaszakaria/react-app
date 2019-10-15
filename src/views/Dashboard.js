import React from 'react'
import PageTitle from '../components/PageTitle'

function Dashboard() {
    return (
        <div>
            <PageTitle title="Dashboard" />
            <section style={styles.container}>
                <p>This is the about Dashboard</p>
            </section>
        </div>
    )
}

export default Dashboard

const styles = {
    container: {
        padding: '12px'
    }
}

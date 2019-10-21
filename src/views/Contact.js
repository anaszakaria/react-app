import React from 'react'
import PageTitle from 'components/PageTitle'

function Contact(props) {
    return (
        <div>
            <PageTitle title="Contact" />
            <section style={styles.container}>
                <p>This is the contact page</p>
            </section>
        </div>
    )
}

export default Contact

const styles = {
    container: {
        padding: '12px'
    }
}

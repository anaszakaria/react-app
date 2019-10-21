import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import PageTitle from 'components/PageTitle'

function Contact(props) {
    console.log(props)
    const { id } = useParams()
    const { search } = useLocation()
    console.log(id, search)
    return (
        <div>
            <PageTitle title="Contact" />
            <section style={styles.container}>
                <p>This is the contact page</p>
                <p>ID: {id}</p>
                <p>QueryString: {search}</p>
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

import React, { Component } from 'react'
import PageTitle from '../components/PageTitle'
import queryString from 'query-string'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            user: null,
            role: null
        }
    }

    componentDidMount() {
        this.setState((prevState, { match: { params }, location: { search } }) => {
            const result = queryString.parse(search)
            return { id: params.id, user: result.user, role: result.role }
        })
    }

    render() {
        return (
            <div>
                <PageTitle title="Dashboard" />
                <section style={styles.container}>
                    <p>ID: {this.state.id}</p>
                    <p>User: {this.state.user}</p>
                    <p>Role: {this.state.role}</p>
                </section>
            </div>
        )
    }
}

const styles = {
    container: {
        padding: '12px'
    }
}

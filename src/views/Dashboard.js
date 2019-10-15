import React, { Component } from 'react'
import PageTitle from '../components/PageTitle'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props
        console.log(params)
        this.setState({ id: params.id })
    }

    render() {
        return (
            <div>
                <PageTitle title="Dashboard" />
                <section style={styles.container}>
                    <p>This is the dashboard page</p>
                    <p>ID: {this.state.id}</p>
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

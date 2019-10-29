import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from 'store/actions'

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch(increment())
    }

    decrement = () => {
        this.props.dispatch(decrement())
    }

    reset = () => {
        this.props.dispatch(reset())
    }

    render() {
        return (
            <div style={styles.container}>
                <h4>Counter</h4>
                <div>
                    <button style={styles.button} onClick={this.decrement}>-</button>
                    <span style={styles.number}>{this.props.count}</span>
                    <button style={styles.button} onClick={this.increment}>+</button>
                </div>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter) // map state to props

const styles = {
    container: {
        padding: '12px',
        textAlign: 'center'
    },
    button: {
        display: 'inline',
        width: '50px',
        margin: '6px'
    },
    number: {
        margin: '12px'
    }
}

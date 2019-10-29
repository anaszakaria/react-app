import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <h4>Counter</h4>
                <div>
                    <button style={styles.button} onClick={this.decrement}>-</button>
                    <span style={styles.number}>{this.state.count}</span>
                    <button style={styles.button} onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter

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

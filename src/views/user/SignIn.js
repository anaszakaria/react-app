import React from 'react'
import PageTitle from 'components/PageTitle'

function SignIn(props) {
    const submitForm = event => {
        console.log('submit form')
        event.preventDefault()
    }

    return (
        <div>
            <PageTitle title="Sign In" />
            <section style={styles.container}>
                <form onSubmit={submitForm}>
                    <label>User:</label><br/>
                    <input type="text" name="username" /><br/>
                    <label>Password:</label><br/>
                    <input type="password" name="password" /><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </div>
    )
}

export default SignIn

const styles = {
    container: {
        padding: '12px',
        textAlign: 'center'
    }
}

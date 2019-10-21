import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import PageTitle from 'components/PageTitle'

function SignIn({ data: { user } }) {
    let history = useHistory()
    let location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } }
    let signIn = () => {
        user.isAuthenticated = true
        history.replace(from)
    }

    return (
        <div>
            <PageTitle title="Sign In" />
            <section style={styles.container}>
                <form>
                    <label>User:</label><br/>
                    <input type="text" name="username" /><br/>
                    <label>Password:</label><br/>
                    <input type="password" name="password" /><br/><br/>
                </form>
                <button onClick={signIn}>Sign In</button>
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

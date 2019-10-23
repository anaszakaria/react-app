import React from 'react'
import { useHistory } from 'react-router-dom'
import PageTitle from 'components/PageTitle'
import theme from 'config/theme'

function SignIn({ data: { user } }) {
    const history = useHistory()

    const signIn = () => {
        user.isAuthenticated = true
        history.push('/dashboard/dash-001?user=Anas&role=admin')
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
                <button style={styles.signInButton} onClick={signIn}>Sign In</button>
            </section>
        </div>
    )
}

export default SignIn

const styles = {
    container: {
        padding: '12px',
        textAlign: 'center'
    },
    signInButton: {
        background: theme.primaryGreen
    }
}
